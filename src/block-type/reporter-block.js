import Block from './block.js';

export default class ReporterBlock extends Block {
    toScratchblocks (locale, opts) {
        return `(${this.blockSyntax(locale, opts)}${this.useOptions(locale, opts)})`;
    }
}
