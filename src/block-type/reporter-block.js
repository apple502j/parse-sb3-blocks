import Block from './block.js';

export default class ReporterBlock extends Block {
    toScratchblocks (locale) {
        return `(${this.blockSyntax(locale)}${this.useOptions(locale, opts)})`;
    }
}
