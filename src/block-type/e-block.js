import Block from './block.js';
import {getMessageForLocale, getSpecialMessage} from '../block-mapping/block-mapping.js';

export default class EBlock extends Block {
    constructor (id, opcode, inputtables, block_key, else_key) {
        super(id, opcode, inputtables);
        this.block_key = block_key;
        this.else_key = else_key;
    }

    toScratchblocks (locale, opts) {
        const blockLabel = this.blockSyntax(locale);
        const firstBlocks = this.inputtables[this.block_key].toScratchblocks(locale);
        const elseLabel = getSpecialMessage(locale, 'else');
        const elseBlocks = this.inputtables[this.else_key].toScratchblocks(locale);
        const end = getSpecialMessage(locale, 'end');
        const tab = opts.tab || '';
        return `${blockLabel}${this.useOptions(locale, opts)}
${tab}${firstBlocks}
${elseLabel}
${tab}${elseBlocks}
${end}`;
    }
}
