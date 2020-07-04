import Block from './block.js';

export default class BooleanBlock extends Block {
    toScratchblocks () {
        return `<${this.blockSyntax(locale)}>`;
    }
}
