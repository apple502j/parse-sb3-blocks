class Stack {
    constructor (blocks) {
        this.blocks = blocks;
    }

    toScratchblocks (locale, opts) {
        const tab = opts.tab || '';
        return this.blocks.map(block => `${tab}${block.toScratchblocks(locale, {tab})}`).join('\n');
    }
}
