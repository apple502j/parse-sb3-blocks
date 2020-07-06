class Input {
    constructor (content) {
        this.content = this.sanitize(String(content || ''));
    }

    sanitize (content) {
        return content.replace(/[\u0001-\u001f]/g, ''); // eslint-disable-line no-control-regex
    }

    toScratchblocks () {
        return this.content;
    }
}

class NumberInput extends Input {
    toScratchblocks () {
        return `(${this.content})`;
    }
}

class StringInput extends Input {
    toScratchblocks () {
        return `[${this.content}]`;
    }
}

class ColorPickerInput extends Input {
    toScratchblocks () {
        return `[${this.content}]`;
    }
}

class BroadcastMenuInput extends Input {
    toScratchblocks () {
        return `[${this.content} v]`;
    }
}


class EmptyBooleanInput extends Input {
    toScratchblocks () {
        return '<>';
    }
}

export {
    Input as default,
    NumberInput,
    StringInput,
    ColorPickerInput,
    BroadcastMenuInput,
    EmptyBooleanInput
};
