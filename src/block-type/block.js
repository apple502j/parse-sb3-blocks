import {getMessageForLocale} from '../block-mapping/block-mapping.js';

export default class Block {
    constructor (id, opcode, inputtables) {
        this.id = id;
        this.opcode = opcode;
        this.inputtables = inputtables || {};
    }

    blockSyntax (locale) {
        let syntax = getMessageForLocale(locale, this.opcode);
        return syntax.replace(
            /\({[\w-]\)}/g,
            (_, key) => this.inputtables[key].toScratchblocks(locale)
        );
    }

    toScratchblocks (locale) {
        return this.blockSyntax(locale);
    }
}
