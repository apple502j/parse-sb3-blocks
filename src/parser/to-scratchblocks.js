import parseScript from './parse.js';

const toScratchblocks = (scriptStart, blocks, locale, opts) => {
    const parsed = parseScript(scriptStart, blocks);
    return parsed.map(block => block.toScratchblocks(locale, opts || {})).join('\n');
};

export default toScratchblocks;
