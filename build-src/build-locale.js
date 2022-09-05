import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import localeObject from 'scratch-l10n';
import { default as allBlocks, allMenus } from '../src/block-mapping/all-blocks.js';

const writeFile = promisify(fs.writeFile);
const localeNames = Object.keys(localeObject.default);

const translateKeyToCategory = key => {
    if (key.includes('_')) return key.split('_')[0].toLowerCase();
    if (key.includes('.')) return key.split('.')[0];
};

const asyncFuncy = async () => {
    const rawTranslations = {};
    const blocksPromise = [];
    const extensionsPromise = [];
    localeNames.forEach(name => {
        blocksPromise.push(import(`scratch-l10n/editor/blocks/${name}.json`));
        extensionsPromise.push(import(`scratch-l10n/editor/extensions/${name}.json`));
    });
    const blocksPromiseReturned = await Promise.all(blocksPromise);
    const extensionsPromiseReturned = await Promise.all(extensionsPromise);
    localeNames.forEach(
        (name, i) => rawTranslations[name] = Object.assign(
            {},
            extensionsPromiseReturned[i].default,
            blocksPromiseReturned[i].default
        )
    );

    const keys = new Set();
    const translateKeyToArgMap = {};
    Object.keys(allBlocks).forEach(key => {
        const entry = allBlocks[key];
        if (entry.noTranslation) return;
        const translationKey = entry.translationKey || key.toUpperCase();
        keys.add(translationKey);
        if (Object.prototype.hasOwnProperty.call(translateKeyToArgMap, translationKey)) return;
        translateKeyToArgMap[translationKey] = Array.from(entry.defaultMessage.matchAll(
            // This library uses react-intl-like embed value format: {FOO}
            /\{([\w-]+)\}/g
        )).map(item => item[1]);
    });
    Object.values(allMenus).reduce(
        // cur = {ITEM1: {translationKey: 'hi'}}
        (acc, cur) => [...acc, ...Object.values(cur).map(value => value.translationKey)],
        []
    ).forEach(key => keys.add(key));

    const result = {};
    const localeOptions = {};
    localeNames.forEach(name => {
        const localeUsedName = new Map();
        result[name] = {};
        localeOptions[name] = {};
        keys.forEach(key => {
            let translation = rawTranslations[name][key];
            if (Object.prototype.hasOwnProperty.call(translateKeyToArgMap, key)) {
                translation = translation.replace(
                    // scratch-blocks uses 1-indexed percent: %1, %2
                    /%([\d]+)/g,
                    (_, n) => `{${translateKeyToArgMap[key][Number(n) - 1]}}`
                ).replace(
                    // scratch-vm uses [FOO] instead of {FOO}
                    /\[([\w]+)\]/g,
                    (_, v) => `{${v}}`
                );
                // scratchblocks does not care about params.
                const translationWithoutParam = translation.replace(/\{[\w]+\}/g, '').trim();
                if (localeUsedName.has(translationWithoutParam)) {
                    localeUsedName.get(translationWithoutParam).push(key);
                } else {
                    localeUsedName.set(translationWithoutParam, [key]);
                }
            }
            result[name][key] = translation;
        });
        Array.from(localeUsedName.values()).forEach(arrayKeys => {
            if (arrayKeys.length < 2) return;
            arrayKeys.forEach(dupeKey => localeOptions[name][dupeKey] = translateKeyToCategory(dupeKey));
        });
    });


    // This is a hacky solution, and depends on JSON objects being parseable as JS.
    // It works so don't care.
    const jsonString = JSON.stringify(result);
    const jsString = `/* GENERATED FILE DO NOT EDIT */\nexport default ${jsonString};`;
    const outputPath = path.join('src', 'block-mapping', 'translations.js');
    writeFile(outputPath, jsString, 'utf-8');

    const jsonOpts = JSON.stringify(localeOptions);
    const jsOpts = `/* GENERATED FILE DO NOT EDIT */\nexport default ${jsonOpts};`;
    const optsOutputPath = path.join('src', 'block-mapping', 'options.js');
    writeFile(optsOutputPath, jsOpts, 'utf-8');
};
asyncFuncy();
