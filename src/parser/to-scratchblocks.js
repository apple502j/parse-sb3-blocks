import parseScript from './parse.js';

const toScratchblocks = (scriptStart, blocks, locale, opts) => {
    if (!opts) opts = {};
    opts = Object.assign(
        {
            tab: ' '.repeat(4),
            variableStyle: 'none',
            _stackNum: 0,
        },
        opts
    );
    const parsed = parseScript(scriptStart, blocks);
    return parsed.map(block => block.toScratchblocks(locale, opts)).join('\n');
};

export default toScratchblocks;
