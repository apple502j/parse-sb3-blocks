import {BLOCK, BOOLEAN_BLOCK, REPORTER_BLOCK} from '../block-mapping/block-enum.js';

export default class Variable {
    constructor (id, value, category, type) {
        this.id = id;
        this.value = value;
        this.category = category;
        this.type = type || REPORTER_BLOCK;
    }

    toScratchblocks () {
        let options = '';
        if (this.category) options = `::${this.category}`;
        const block = `${this.value}${options}`;
        switch (this.type) {
            case REPORTER_BLOCK: return `(${block})`;
            case BOOLEAN_BLOCK: return `<${block}>`;
            case BLOCK: return block;
        }
    }
};
