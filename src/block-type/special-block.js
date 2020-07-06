import Block from '../block.js';
import {getSpecialMessage} from '../block-mapping/block-mapping.js';

export default class SpecialBlock extends Block {
    blockSyntax (locale) {
        const syntax = getSpecialMessage(locale, this.opcode);
        return syntax.replace(
            /\{([\w-]+)\}/g,
            (_, key) => this.inputtables[key].toScratchblocks(locale)
        );
    }
}
