import fs from 'fs';
import path from 'path';
import {promisify} from 'util';
import localeObject from 'scratch-l10n';
import {default as allBlocks, allMenus} from './src/block-mapping/all-blocks.js';

const writeFile = promisify(fs.writeFile);
const localeNames = Object.keys(localeObject);

const asyncFuncy = async () => {
    const rawTranslations = {};
    const blocksPromise = [];
    const extensionsPromise = [];
    localeNames.forEach(name => {
        blocksPromise.push(import(`scratch-l10n/editor/blocks/${name}`));
        extensionsPromise.push(import(`scratch-l10n/editor/extensions/${name}`));
    });
    const blocksPromiseReturned = await Promise.all(blocksPromise);
    const extensionsPromiseReturned = await Promise.all(extensionsPromise);
    localeNames.forEach(
        (name, i) => rawTranslations[name] = Object.assign({}, extensionsPromiseReturned[i], blocksPromiseReturned[i])
    );


    const keys = new Set();
    const translateKeyToArgMap = {};
    Object.keys(allBlocks).forEach(key => {
        const entry = allBlocks[key];
        if (entry.isSpecialBlock) return;
        const translationKey = entry.translationKey || key.toUpperCase();
        keys.add(translationKey);
        if (translateKeyToArgMap.hasOwnProperty(translationKey)) return;
        translateKeyToArgMap[translationKey] = Array.from(entry.defaultMessage.matchAll(
            /\{([\w-]+)\}/g
        )).map(item => item[1]);
    });
    Object.values(allMenus).reduce(
        // cur = {ITEM1: {translationKey: 'hi'}}
        (acc, cur) => [...acc, ...Object.values(cur).map(value => value.translationKey)],
        []
    ).forEach(key => keys.add(key));

    const result = {};
    localeNames.forEach(name => keys.forEach(key => {
        let translation = rawTranslations[name][key];
        if (translateKeyToArgMap.hasOwnProperty(key)) {
            translation = translation.replace(
                /%([\d]+)/g,
                (_, n) => `{${translateKeyToArgMap[Number(n)]}}`
            ).replace(
                /\[([\w]+)\]/g,
                (_, v) => `{${v}}`
            );
        }
        result[name][key] = translation;
    }));

    const jsonString = JSON.stringiy(result);
    const jsString = `export default ${jsonString}`;
    const outputPath = path.join('src', 'block-mapping', 'translations.js');
    writeFile(outputPath, jsString, 'utf-8');
};
asyncFuncy();
