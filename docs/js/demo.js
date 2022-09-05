const { toScratchblocks } = window.parseSB3Blocks;
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
    'procedures_definition',
    'boost_whenColor',
    'boost_whenTilted',
    'ev3_whenButtonPressed',
    'ev3_whenDistanceLessThan',
    'ev3_whenBrightnessLessThan',
    'gdxfor_whenGesture',
    'gdxfor_whenForcePushedOrPulled',
    'gdxfor_whenTilted'
];

new ClipboardJS('.sbCopyBtn');

const errorElem = document.getElementById('error');
const urlInput = document.getElementById('urlInput');
const spriteChooser = document.getElementById('spriteChooser');
const spriteChooserSelect = document.getElementById('sprite');
const flexContainer = document.getElementById('flexContainer');
const scratchblocksAreaInner = document.getElementById('scratchblocksAreaInner');
const svgArea = document.getElementById('svgArea');
const bookmarkLink = document.getElementById('bookmark');
const sbCopyBtn = document.getElementById('sbCopyBtn');
const sbDownloadBtn = document.getElementById('downloadText');

let projectData = {};
let localeSetting = 'en';
let scratchblocksCode = '';

const usedOpts = Object.create(null);

const localeSelect = document.getElementById('locale');
Object.keys(window.scratchLocales).forEach(localeCode => {
    if (localeCode === 'en') return;
    const elem = document.createElement('option');
    elem.value = localeCode;
    elem.innerText = `${window.scratchLocales[localeCode].name} (${localeCode})`;
    localeSelect.appendChild(elem);
});

const downloadTextAsBlob = (filename, text) => {
    const blob = new Blob([text], {
        type: 'text/plain'
    });
    if (navigator.msSaveOrOpenBlob) return navigator.msSaveOrOpenBlob(blob, filename);
    const objectURL = URL.createObjectURL(blob);
    const tempElem = document.createElement('a');
    tempElem.href = objectURL;
    tempElem.download = filename;
    tempElem.type = 'text/plain';
    document.body.appendChild(tempElem);
    tempElem.click();
    setTimeout(() => {
        document.body.removeChild(tempElem);
        URL.revokeObjectURL(objectURL);
    }, 500);
};

const canDownload = Object.prototype.hasOwnProperty.call(HTMLAnchorElement.prototype, 'download');
if (canDownload) {
    sbDownloadBtn.addEventListener('click', () => downloadTextAsBlob('scratchblocks.txt', scratchblocksCode));
} else {
    sbDownloadBtn.hidden = true;
    sbCopyBtn.classList.add('forceOnly');
}

const loadProject = async projectId => {
    let token = '';
    try {
        const tokenResp = await fetch(`https://trampoline.turbowarp.org/proxy/projects/${projectId}`);
        if (tokenResp.ok) {
            const tokenData = await tokenResp.json();
            token = `&token=${tokenData.project_token}`;
        }
    } catch (e) {
        console.error(e);
    }
    try {
        const resp = await fetch(`https://projects.scratch.mit.edu/${projectId}/?${Date.now()}${token}`);
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
    usedOpts.pid = encodeURIComponent(projectId);
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
    bookmarkLink.hidden = true;
    const maybeURL = urlInput.value;
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
    generateScratchblocks();
});

const generateScratchblocks = () => {
    flexContainer.hidden = true;
    bookmarkLink.hidden = true;
    if (!projectData || projectData === {}) {
        console.error('projectData is missing');
        return;
    }
    localeSetting = localeSelect.value;
    if (!Object.prototype.hasOwnProperty.call(window.scratchLocales, localeSetting)) {
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
    usedOpts.locale = encodeURIComponent(localeSetting);
    usedOpts.sprite = target.isStage ? '_stage_' : encodeURIComponent(target.name);
    scratchblocksCode = hatBlocks.map(
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

    bookmarkLink.href = `./demo?pid=${usedOpts.pid}&locale=${usedOpts.locale}&sprite=${usedOpts.sprite}`;
    bookmarkLink.hidden = false;
};

const searchParams = new URL(location).searchParams;
const searchPID = searchParams.get('pid');
if (searchPID && /^[\d]+$/g.test(searchPID)) {
    urlInput.value = `https://scratch.mit.edu/projects/${searchPID}/`;
    localeSelect.value = searchParams.get('locale') || 'en';
    let spriteName = searchParams.get('sprite') || '_stage_';
    loadProject(searchPID).then(() => {
        let hasSelected = false;
        Array.from(spriteChooserSelect.children).forEach(elem => {
            const isCorrect = elem.value === spriteName;
            hasSelected = hasSelected || isCorrect;
            elem.selected = isCorrect;
        });
        if (!hasSelected) {
            spriteName = '_stage_';
            Array.from(spriteChooserSelect.children).find(e => e.value === '_stage_').selected = true;
        }
        spriteChooserSelect.value = spriteName;
        generateScratchblocks();
    });
}
