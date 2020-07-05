export default class ProcedureCall {
    constructor (id, proc, argObj) {
        this.id = id;
        this.proc = proc;
        this.argObj = argObj;
    }

    toScratchblocks (locale) {
        let i = 0;
        const procCode = this.proc.replace(
            /%([sb])/g,
            () => this.argObj[i++].toScratchblocks(locale)
        );
        return `${procCode}::custom`;
    }
};
