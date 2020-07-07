import fs from 'fs';
import path from 'path';
import {promisify} from 'util';
import localeObject from 'scratch-l10n';

const copyFile = promisify(fs.copyFile);
const writeFile = promisify(fs.writeFile);
const locales = localeObject.default;

if (String(process.env.mode).includes('docs')) {
    console.log('Building docs..');
    const from = path.resolve('dist', 'parse-sb3-blocks.browser.js');
    const to = path.resolve('docs', 'js', 'parse-sb3-blocks.browser.js');
    copyFile(from, to, fs.constants.COPYFILE_FICLONE)
        .then(() => {
            console.log('Generating locale lists...');
            const localeFilePath = path.resolve('docs', 'js', 'scratch-locales.js');
            const localeFile = `/* GENERATED */\nwindow.scratchLocales = ${JSON.stringify(locales)}`;
            return writeFile(localeFilePath, localeFile, 'utf-8');
        });
}
