import Block from '../block-type/block.js';
import BooleanBlock from '../block-type/boolean-block.js';
import CBlock from '../block-type/c-block.js';
import EBlock from '../block-type/e-block.js';
import ReporterBlock from '../block-type/reporter-block.js';
import SpecialBlock from '../block-type/special-block.js;'
import Variable from '../block-type/variable.js;'

import Icon from '../input/icon.js';
import Menu from '../input/menu.js';
import {NumberInput, StringInput, ColorPickerInput, EmptyBooleanInput} from '../input/input.js';
import Stack from '../input/stack.js';

import allBlocks from '../block-mapping/all-blocks.js';
import {
    BLOCK,
    BOOLEAN_BLOCK,
    C_BLOCK,
    E_BLOCK,
    REPORTER_BLOCK
} from '../block-mapping/block-enum.js';

const BLOCK_NOT_INSERTED = 1;
const BLOCK_INSERTED_NO_DEFAULT = 2;
const BLOCK_INSERTED_DEFAULT = 3;

const opcodeToIcon = {
    event_whenflagclicked: new Icon('greenFlag'),
    motion_turnnleft: new Icon('turnLeft'),
    motion_turnnright: new Icon('turnRight')
};

const getInputtableForBlock = (block, blocks, asScript) => {
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
        if (key.startsWith("SUBSTACK") && asScript) {
            inputtables[key] = new Stack(parseScript(value[1], blocks));
            return;
        }
        if (shadowType === BLOCK_INSERTED_DEFAULT || shadowType === BLOCK_INSERTED_NO_DEFAULT) {
            inputtables[key] = parseInsertedBlock(value[1], blocks);
            return;
        }
        // wip
    })
    return inputtables;
}

const parseScript = (scriptStart, blocks) => {
    let blockId = scriptStart;
    const parsedBlocks = [];
    do {
        let block = blocks[blockId];
        block.id = blockId;
        let parsedBlock;
        const opcode = block.opcode;
        const blockInfo = allBlocks[opcode];
        if (blockInfo.isSpecialBlock) {
            parsedBlock = new SpecialBlock(block.id, opcode, getInputtableForBlock(block, blocks));
        } else {
            const blockType = blockInfo.type || BLOCK;
            switch (blockType) {
                case BLOCK:
                    parsedBlock = new Block(block.id, opcode, getInputtableForBlock(block, blocks));
                    break;
                case C_BLOCK:
                case E_BLOCK:
                    parsedBlock = new CBlock(block.id, opcode, getInputtableForBlock(block, blocks, true));
                    break;
            }
        }
        parsedBlocks.push(parsedBlock);
        blockId = block.next;
    } while (blockId);
    return parsedBlocks;
};
