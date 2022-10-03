import allBlocks from '../block-mapping/all-blocks.js';
import Sanitizer from '../sanitizer.js';
import { BLOCK, BOOLEAN_BLOCK, REPORTER_BLOCK } from '../block-mapping/block-enum.js';
import {
    getTranslationKeyFromValue,
    getOpcodeFromTranslationKey,
} from '../block-mapping/block-mapping.js';

export default class Variable {
    constructor(id, value, category, type) {
        this.id = id;
        this.value = value;
        this.category = category;
        this.type = type || REPORTER_BLOCK;
    }

    needsOpts(locale) {
        const translationKey = getTranslationKeyFromValue(locale, this.value);
        if (!translationKey) return false;
        const opcode = getOpcodeFromTranslationKey(translationKey);
        if (!Object.prototype.hasOwnProperty.call(allBlocks, opcode)) return false;
        return allBlocks[opcode].type === REPORTER_BLOCK;
    }

    toScratchblocks(locale, opts) {
        let options = '';
        if (this.category) {
            options = `::${this.category}`;
        } else if (
            opts.variableStyle === 'always' ||
            (opts.variableStyle === 'as-needed' && this.needsOpts(locale))
        ) {
            options = '::variables';
        }
        const block = `${Sanitizer.sanitize(this.value)}${options}`;
        switch (this.type) {
            case REPORTER_BLOCK:
                return `(${block})`;
            case BOOLEAN_BLOCK:
                return `<${block}>`;
            case BLOCK:
                return block;
        }
    }
}
