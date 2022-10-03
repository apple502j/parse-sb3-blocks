export default class Stack {
    constructor(blocks) {
        this.blocks = blocks || [];
    }

    toScratchblocks(locale, opts) {
        const tab = (opts.tab || '').repeat(opts._stackNum || 1);
        opts._stackNum = (opts._stackNum || 1) + 1;
        const render = this.blocks
            .map(block => `${tab}${block.toScratchblocks(locale, opts)}`)
            .join('\n');
        opts._stackNum -= 1;
        return render;
    }
}
