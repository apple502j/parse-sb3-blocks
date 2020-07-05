import Block from './block.js';

export default class BooleanBlock extends Block {
    toScratchblocks (locale, opts) {
        return `<${this.blockSyntax(locale)}${this.useOptions(locale, opts)}>`;
    }
}
