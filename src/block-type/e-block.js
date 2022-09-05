import Block from './block.js';
import { getSpecialMessage } from '../block-mapping/block-mapping.js';

export default class EBlock extends Block {
    constructor(id, opcode, inputtables, block_key, else_key) {
        super(id, opcode, inputtables);
        this.block_key = block_key || 'SUBSTACK';
        this.else_key = else_key || 'SUBSTACK2';
    }

    toScratchblocks(locale, opts) {
        const blockLabel = this.blockSyntax(locale, opts);
        const firstBlocks = this.inputtables[this.block_key].toScratchblocks(locale, opts);
        const elseLabel = getSpecialMessage(locale, 'else');
        const elseBlocks = this.inputtables[this.else_key].toScratchblocks(locale, opts);
        const end = 'end';
        const tab = (opts.tab || '').repeat((opts._stackNum || 1) - 1);
        return `${blockLabel}${this.useOptions(locale, opts)}
${firstBlocks}
${tab}${elseLabel}
${elseBlocks}
${tab}${end}`;
    }
}
