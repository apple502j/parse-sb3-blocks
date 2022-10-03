import { getMessageForLocale, getOptsForLocale } from '../block-mapping/block-mapping.js';

export default class Block {
    constructor(id, opcode, inputtables) {
        this.id = id;
        this.opcode = opcode;
        this.inputtables = inputtables || {};
    }

    blockSyntax(locale, opts) {
        const syntax = getMessageForLocale(locale, this.opcode);
        if (this.opcode === 'control_stop') {
            return `${syntax} ${this.inputtables.STOP_OPTION.toScratchblocks(locale, opts)}`;
        }
        return syntax.replace(/\{([\w-]+)\}/g, (_, key) =>
            this.inputtables[key].toScratchblocks(locale, opts)
        );
    }

    useOptions(locale, opts) {
        opts = Object.assign({}, getOptsForLocale(locale, this.opcode), opts);
        const optionArray = [];
        if (opts.category) optionArray.push(opts.category);
        if (opts.type) optionArray.push(opts.type);
        if (optionArray.length) return `::${optionArray.join(' ')}`;
        return '';
    }

    toScratchblocks(locale, opts) {
        return `${this.blockSyntax(locale, opts)}${this.useOptions(locale, opts)}`;
    }
}
