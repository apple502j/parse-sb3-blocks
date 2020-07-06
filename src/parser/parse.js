import Block from '../block-type/block.js';
import BooleanBlock from '../block-type/boolean-block.js';
import CBlock from '../block-type/c-block.js';
import EBlock from '../block-type/e-block.js';
import ReporterBlock from '../block-type/reporter-block.js';
import SpecialBlock from '../block-type/special-block.js';
import Variable from '../block-type/variable.js';
import Definition from '../block-type/definition.js';
import ProcedureCall from '../block-type/procedure-call.js';

import Icon from '../input/icon.js';
import Menu from '../input/menu.js';
import {NumberInput, StringInput, ColorPickerInput, BroadcastMenuInput, EmptyBooleanInput} from '../input/input.js';
import Stack from '../input/stack.js';

import allBlocks from '../block-mapping/all-blocks.js';
import {
    BLOCK,
    BOOLEAN_BLOCK,
    C_BLOCK,
    E_BLOCK,
    REPORTER_BLOCK
} from '../block-mapping/block-enum.js';

const BLOCK_NOT_INSERTED = 1; // eslint-disable-line no-unused-vars
const BLOCK_INSERTED_NO_DEFAULT = 2;
const BLOCK_INSERTED_DEFAULT = 3;

const opcodeToIcon = {
    event_whenflagclicked: new Icon('greenFlag'),
    motion_turnleft: new Icon('turnLeft'),
    motion_turnright: new Icon('turnRight')
};

const inputMap = new Map([
    [9, ColorPickerInput],
    [10, StringInput],
    [11, BroadcastMenuInput]
]);

const getInputtablesForBlock = (block, blocks, asScript) => {
    const inputtables = {};
    const opcode = block.opcode;
    const blockInfo = allBlocks[opcode];
    if (blockInfo.isSpecialBlock) inputtables.ICON = opcodeToIcon[opcode];
    Object.keys(block.fields).forEach(key => {
        // item 1 is variable ID, which we do not need.
        inputtables[key] = new Menu(null, opcode, block.fields[key][0]);
    });
    Object.keys(block.inputs).forEach(key => {
        const value = block.inputs[key];
        const shadowType = value[0];
        if (key.startsWith('SUBSTACK') && asScript) {
            // Blocks inside C-block
            inputtables[key] = new Stack(parseScript(value[1], blocks));
            return;
        }
        if (shadowType === BLOCK_INSERTED_DEFAULT || shadowType === BLOCK_INSERTED_NO_DEFAULT) {
            // There's a block above it. We don't care about shadows
            inputtables[key] = parseInsertedBlock(value[1], blocks);
            return;
        }
        // No block above it.
        // The input is variable, num/str or menu.
        if (typeof value[1] === 'string') {
            // value[1] is string, so it's menu
            const menuBlockId = value[1];
            const menu = blocks[menuBlockId];
            inputtables[key] = new Menu(menuBlockId, opcode, menu.fields[key][0]);
        } else {
            // value[1] is probably array
            const inputDetails = value[1];
            const inputType = inputDetails[0];
            if (inputType === 12) {
                // normal variable block
                inputtables[key] = new Variable(null, inputDetails[1]);
                return;
            }
            if (inputType === 13) {
                // normal list block
                inputtables[key] = new Variable(null, inputDetails[1], 'list');
                return;
            }
            const inputConstructor = inputMap.get(inputType) || NumberInput;
            inputtables[key] = new inputConstructor(inputDetails[1]);
        }
    });
    if (asScript && !inputtables.hasOwnProperty('SUBSTACK')) {
        inputtables.SUBSTACK = new Stack();
    }
    if (blockInfo.type === E_BLOCK && !inputtables.hasOwnProperty('SUBSTACK2')) {
        inputtables.SUBSTACK2 = new Stack();
    }
    if (blockInfo.boolArg) {
        blockInfo.boolArg.forEach(boolArg => {
            if (!inputtables.hasOwnProperty(boolArg)) {
                inputtables[boolArg] = new EmptyBooleanInput();
            }
        });
    }
    return inputtables;
};

const parseInsertedBlock = (blockId, blocks) => {
    // Handles inserted blocks. NOTE: no variable/list, no stack
    const block = blocks[blockId];
    const opcode = block.opcode;
    if (opcode === 'argument_reporter_string_number') {
        return new Variable(blockId, block.fields.VALUE[0], 'custom', REPORTER_BLOCK);
    }
    if (opcode === 'argument_reporter_boolean') {
        return new Variable(blockId, block.fields.VALUE[0], 'custom', BOOLEAN_BLOCK);
    }
    const blockInfo = allBlocks[opcode];
    let blockConstructor = Block;
    switch(blockInfo.type) {
        case BOOLEAN_BLOCK: blockConstructor = BooleanBlock; break;
        case REPORTER_BLOCK: blockConstructor = ReporterBlock; break;
    }
    return new blockConstructor(blockId, opcode, getInputtablesForBlock(block, blocks));
};

const getDefinition = (block, blocks) => {
    const definitionId = block.inputs.custom_block[1];
    const definition = blocks[definitionId];
    const args = {
        s: [],
        b: []
    };
    const counts = {
        s: 0,
        b: 0
    };
    JSON.parse(definition.mutation.argumentids).forEach(argId => {
        const argBlock = blocks[argId];
        const arg = argBlock.fields.VALUE[0];
        if (argBlock.opcode === 'argument_reporter_string_number') {
            args.s.push(`(${arg})`);
        } else {
            args.b.push(`<${arg}>`);
        }
    });
    return definition.proccode.replace(
        /%([sb])/g,
        (_, s_b) => {
            return args[s_b][counts[s_b]++];
        }
    );
};

const getProcCallArgs = (block, blocks) => {
    const argIDs = JSON.parse(block.mutation.argumentids);
    const argObjs = [];
    let i = 0;
    Array.from(block.mutation.proccode.matchAll(
        /%([sb])/g
    )).forEach(matchObj => {
        const s_b = matchObj[1];
        const id = argIDs[i++];
        let argObj = null;
        const input = block.inputs[id];
        if (s_b === 'b' && !input) {
            argObj = new EmptyBooleanInput();
        } else {
            const shadowType = input[0];
            if (shadowType === BLOCK_INSERTED_DEFAULT || shadowType === BLOCK_INSERTED_NO_DEFAULT) {
                argObj = parseInsertedBlock(input[1], blocks);
            } else {
                const inputDetails = input[1];
                const inputType = inputDetails[0];
                if (inputType === 12) {
                    // normal variable block
                    argObj = new Variable(null, inputDetails[1]);
                } else if (inputType === 13) {
                    // normal list block
                    argObj = new Variable(null, inputDetails[1], 'list');
                } else {
                    argObj = new StringInput(inputDetails[1]);
                }
            }
        }
        argObjs.push(argObj);
    });
    return argObjs;
};

const parseScript = (scriptStart, blocks) => {
    let blockId = scriptStart;
    const parsedBlocks = [];
    do {
        const block = blocks[blockId];
        block.id = blockId;
        let parsedBlock;
        const opcode = block.opcode;
        const blockInfo = allBlocks[opcode];
        if (blockInfo.isSpecialBlock) {
            parsedBlock = new SpecialBlock(block.id, opcode, getInputtablesForBlock(block, blocks));
        } else if (opcode === 'procedures_definition') {
            parsedBlock = new Definition(block.id, getDefinition(block, blocks));
        } else if (opcode === 'procedures_call') {
            parsedBlock = new ProcedureCall(block.id, block.mutation.proccode, getProcCallArgs(block, blocks));
        } else {
            const blockType = blockInfo.type || BLOCK;
            switch (blockType) {
                case BLOCK:
                    parsedBlock = new Block(block.id, opcode, getInputtablesForBlock(block, blocks));
                    break;
                case C_BLOCK:
                    parsedBlock = new CBlock(block.id, opcode, getInputtablesForBlock(block, blocks, true));
                    break;
                case E_BLOCK:
                    parsedBlock = new EBlock(block.id, opcode, getInputtablesForBlock(block, blocks, true));
                    break;
            }
        }
        parsedBlocks.push(parsedBlock);
        blockId = block.next;
    } while (blockId);
    return parsedBlocks;
};

export default parseScript;
