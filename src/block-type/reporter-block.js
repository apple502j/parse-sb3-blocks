import Block from './block.js';

export default class ReporterBlock extends Block {
    toScratchblocks () {
        return `(${this.blockSyntax(locale)})`;
    }
}
