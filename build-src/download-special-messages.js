import fs from 'fs';
import path from 'path';
import {promisify} from 'util';
import fetch from 'node-fetch';

const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);

const defaultPath = 'https://raw.githubusercontent.com/scratchblocks/scratchblocks/master/locales-src/extra_aliases.js';

const specialMessageObj = {};

fetch(process.env.SPECIAL_MESSAGES_URL || defaultPath)
    .then(resp => resp.text())
    .then(text => {
        const esmFile = text.replace('module.exports =', 'export default ');
        return writeFile('./build.temp.js', esmFile, 'utf-8');
    })
    .then(() => import('../build.temp.js'))
    .then(rawObj => {
        const obj = rawObj.default;
        Object.keys(obj).forEach(locale => {
            const ps3bLocale = locale.replace('_', '-').toLowerCase();
            specialMessageObj[ps3bLocale] = {};
            Object.keys(obj[locale]).forEach(key => {
                const blockName = obj[locale][key];
                switch (blockName) {
                    case 'end':
                        specialMessageObj[ps3bLocale].end = key;
                        break;
                    case 'when @greenFlag clicked':
                        specialMessageObj[ps3bLocale].event_whenflagclicked = key.replace('@greenFlag', '{ICON}');
                        break;
                    /* eslint-disable indent */
                    case 'turn @turnRight %1 degrees':
                        specialMessageObj[ps3bLocale].motion_turnright = key.replace('@turnRight', '{ICON}')
                                                                            .replace('%1', '{DEGREES}');
                        break;
                    case 'turn @turnLeft %1 degrees':
                        specialMessageObj[ps3bLocale].motion_turnleft = key.replace('@turnLeft', '{ICON}')
                                                                           .replace('%1', '{DEGREES}');
                        break;
                    /* eslint-enable indent */
                }
            });
        });
    })
    .then(() => {
        const jsonMessages = JSON.stringify(specialMessageObj);
        const jsMessages = `/* GENERATED FILE DO NOT EDIT */\nexport default ${jsonMessages};`;
        const outputPath = path.join('src', 'block-mapping', 'special-messages.gen.js');
        return writeFile(outputPath, jsMessages, 'utf-8');
    })
    .then(() => unlink('./build.temp.js'));
