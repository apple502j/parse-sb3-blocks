import Sanitizer from '../sanitizer.js';
export default class ProcedureCall {
    constructor(id, proc, argObj) {
        this.id = id;
        this.proc = proc;
        this.argObj = argObj;
    }

    toScratchblocks(locale, opts) {
        let i = 0;
        const procCode = Sanitizer.labelSanitize(this.proc).replace(
            /%([sb])/g,
            () => this.argObj[i++].toScratchblocks(locale, opts)
        );
        return `${procCode}::custom`;
    }
}
