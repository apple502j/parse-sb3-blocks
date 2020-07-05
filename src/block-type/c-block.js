import Block from './block.js';
import {getMessageForLocale, getSpecialMessage} from '../block-mapping/block-mapping.js';

export default class CBlock extends Block {
    constructor (id, opcode, inputtables, block_key) {
        super(id, opcode, inputtables);
        this.block_key = block_key;
    }

    toScratchblocks (locale, opts) {
        const blockLabel = this.blockSyntax(locale);
        const blocks = this.inputtables[this.block_key].toScratchblocks(locale);
        const tab = opts.tab || '';
        const end = getSpecialMessage(locale, 'end');
        return `${blockLabel}${this.useOptions(locale, opts)}
${tab}${blocks}
${end}`;
    }
}
