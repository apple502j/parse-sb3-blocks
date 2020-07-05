import {getMenuItemForLocale, isSpecialMenuValue} from '../block-mapping/block-mapping.js';

export default class Menu {
    constructor (id, opcode, content) {
        this.id = id;
        // note: opcode is the opcode of the PARENT block.
        this.opcode = opcode;
        this.content = content;
        this.isSpecial = isSpecialMenuValue(opcode, content);
    }

    blockSyntax (locale) {
        return getMenuItemForLocale(locale, this.opcode, this.content);
    }

    toScratchblocks (locale) {
        if (!this.isSpecial) return `[${this.content} v]`;
        return `[${this.blockSyntax(locale)} v]`;
    }
}
