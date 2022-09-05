import parseScript from './parser/parse.js';
import toScratchblocks from './parser/to-scratchblocks.js';

import Block from './block-type/block.js';
import BooleanBlock from './block-type/boolean-block.js';
import CBlock from './block-type/c-block.js';
import EBlock from './block-type/e-block.js';
import ReporterBlock from './block-type/reporter-block.js';
import Variable from './block-type/variable.js';
import Definition from './block-type/definition.js';
import ProcedureCall from './block-type/procedure-call.js';

import Icon from './input/icon.js';
import Menu from './input/menu.js';
import {
    default as Input,
    NumberInput,
    StringInput,
    ColorPickerInput,
    BroadcastMenuInput,
    EmptyBooleanInput
} from './input/input.js';
import Stack from './input/stack.js';

import allBlocks, { allMenus } from './block-mapping/all-blocks.js';
import {
    BLOCK,
    BOOLEAN_BLOCK,
    C_BLOCK,
    E_BLOCK,
    REPORTER_BLOCK
} from './block-mapping/block-enum.js';

export {
    toScratchblocks,
    parseScript,

    Block,
    BooleanBlock,
    CBlock,
    Definition,
    EBlock,
    ProcedureCall,
    ReporterBlock,
    Variable,

    Icon,
    Input,
    NumberInput,
    StringInput,
    ColorPickerInput,
    BroadcastMenuInput,
    EmptyBooleanInput,
    Menu,
    Stack,

    allBlocks,
    allMenus,

    BLOCK,
    BOOLEAN_BLOCK,
    C_BLOCK,
    E_BLOCK,
    REPORTER_BLOCK
};
