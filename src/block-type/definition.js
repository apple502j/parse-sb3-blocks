import Sanitizer from '../sanitizer.js';
import {getMessageForLocale} from '../block-mapping/block-mapping.js';

export default class Definition {
    constructor (id, proc) {
        this.id = id;
        this.proc = Sanitizer.sanitize(proc);
    }

    toScratchblocks (locale) {
        return getMessageForLocale(locale, 'procedures_definition').replace('{PROC}', this.proc);
    }
}
