import Block from './block.js';

export default class CBlock extends Block {
    constructor (id, opcode, inputtables, block_key) {
        super(id, opcode, inputtables);
        this.block_key = block_key || 'SUBSTACK';
    }

    toScratchblocks (locale, opts) {
        const blockLabel = this.blockSyntax(locale, opts);
        const blocks = this.inputtables[this.block_key].toScratchblocks(locale, opts);
        const end = 'end';
        const tab = (opts.tab || '').repeat((opts._stackNum || 1) - 1);
        return `${blockLabel}${this.useOptions(locale, opts)}
${blocks}
${tab}${end}`;
    }
}
