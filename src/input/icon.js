export default class Icon {
    constructor (name) {
        this.name = name;
    }

    toScratchblocks () {
        return `@${this.name}`;
    }
}
