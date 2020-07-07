const {toScratchblocks} = window.parseSB3Blocks;
const PROJECT_URL_REGEX = /^https?:\/\/scratch\.mit\.edu\/projects\/([\d]+)(?:\/(?:(?:fullscreen|editor)\/?)?)?$/g;
const HAT_BLOCKS = [
    'event_whenflagclicked',
    'event_whenkeypressed',
    'event_whengreaterthan',
    'event_whenthisspriteclicked',
    'event_whenstageclicked',
    'event_whenbackdropswitchesto',
    'event_whenbroadcastreceived',
    'control_start_as_clone',
    'procedures_definition'
];

new ClipboardJS('.sbCopyBtn');

const errorElem = document.getElementById('error');
const spriteChooser = document.getElementById('spriteChooser');
const spriteChooserSelect = document.getElementById('sprite');
const flexContainer = document.getElementById('flexContainer');
const scratchblocksAreaInner = document.getElementById('scratchblocksAreaInner');
const svgArea = document.getElementById('svgArea');

let projectData = {};
let localeSetting = 'en';

const localeSelect = document.getElementById('locale');
Object.keys(window.scratchLocales).forEach(localeCode => {
    if (localeCode === 'en') return;
    const elem = document.createElement('option');
    elem.value = localeCode;
    elem.innerText = `${window.scratchLocales[localeCode].name} (${localeCode})`;
    localeSelect.appendChild(elem);
});

const loadProject = async projectId => {
    try {
        const resp = await fetch(`https://projects.scratch.mit.edu/${projectId}/`);
        projectData = await resp.json();
    } catch (e) {
        console.error(e);
        errorElem.innerText = 'Project failed to load.';
        errorElem.hidden = false;
        return;
    }
    if (projectData.objName) {
        console.error('Project looks like sb2 format.');
        errorElem.innerText = 'Project failed to load: the project is sb2 format.';
        errorElem.hidden = false;
        return;
    }
    spriteChooser.hidden = false;
    Array.from(spriteChooserSelect.children).filter(e => e.value !== '_stage_').forEach(elem => {
        spriteChooserSelect.removeChild(elem);
    });
    projectData.targets.filter(t => !t.isStage).forEach(target => {
        const option = document.createElement('option');
        option.value = option.innerText = target.name;
        spriteChooserSelect.appendChild(option);
    });
};

document.getElementById('loadBtn').addEventListener('click', e => {
    e.preventDefault();
    errorElem.hidden = true;
    spriteChooser.hidden = true;
    flexContainer.hidden = true;
    const maybeURL = document.getElementById('urlInput').value;
    const matches = Array.from(maybeURL.matchAll(PROJECT_URL_REGEX));
    if (!matches || !matches.length) {
        errorElem.innerText = 'URL is incorrect';
        errorElem.hidden = false;
        return;
    }
    const projectId = matches[0][1];
    loadProject(projectId);
});

document.getElementById('generateBtn').addEventListener('click', e => {
    e.preventDefault();
    flexContainer.hidden = true;
    if (!projectData || projectData === {}) {
        console.error('projectData is missing');
        return;
    }
    localeSetting = localeSelect.value;
    if (!window.scratchLocales.hasOwnProperty(localeSetting)) {
        localeSetting = 'en';
    }
    const spriteName = spriteChooserSelect.value;
    let target = projectData.targets.find(t => spriteName === '_stage_' ? t.isStage : t.name === spriteName);
    if (!target) {
        target = projectData.find(t => t.isStage);
    }
    const hatBlocks = Object.keys(target.blocks).filter(key => {
        const blockItem = target.blocks[key];
        return blockItem.next && blockItem.topLevel && HAT_BLOCKS.includes(blockItem.opcode);
    });
    Array.from(svgArea.children).forEach(elem => svgArea.removeChild(elem));
    if (hatBlocks.length === 0) {
        return;
    }
    const scratchblocksCode = hatBlocks.map(
        hatKey => toScratchblocks(hatKey, target.blocks, localeSetting, {
            tab: ' '.repeat(4),
            variableStyle: 'as-needed'
        })
    ).join('\n\n');
    scratchblocksAreaInner.innerText = scratchblocksCode;
    const renderOpts = {
        style: 'scratch3',
        languages: localeSetting === 'en' ? ['en'] : [localeSetting.replace('-', '_'), 'en']
    };
    const parsedObj = scratchblocks.parse(scratchblocksCode, renderOpts);
    flexContainer.hidden = false;
    const svgObj = scratchblocks.render(parsedObj, renderOpts);
    const container = document.createElement('div');
    container.className = 'sbContainer';
    container.appendChild(svgObj);
    svgArea.appendChild(container);
});
