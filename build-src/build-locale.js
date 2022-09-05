import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import localeObject from 'scratch-l10n';
import extLocales from 'scratch-translate-extension-languages/languages.json' assert { type: 'json' };
import { default as allBlocks, allMenus, _unkeyedTextToSpeechLanguages as TTS_LANGUAGE_INFO } from '../src/block-mapping/all-blocks.js';

const writeFile = promisify(fs.writeFile);
const localeNames = Object.keys(localeObject.default);

const translateKeyToCategory = key => {
    if (key.includes('_')) return key.split('_')[0].toLowerCase();
    if (key.includes('.')) return key.split('.')[0];
};

/**
 * The following code is copied and modified from Scratch VM:
 * https://github.com/LLK/scratch-vm/blob/develop/src/extensions/scratch3_text2speech/index.js
 * Under BSD-3-Clause license, as follows:
 *
 * Copyright (c) 2016, Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice, this
 * list of conditions and the following disclaimer in the documentation and/or other
 * materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors may
 * be used to endorse or promote products derived from this software without specific
 * prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 * SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
 * BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

const getExtMessages = (locale, extMessages) => {
    locale = locale.toLowerCase();
    if (!Object.prototype.hasOwnProperty.call(extLocales.menuMap, locale)) {
        locale = 'en';
    }
    const translate = Object.fromEntries(extLocales.menuMap[locale].map(entry => [`special.translate.${entry.code}`, entry.name]));
    const localizedNameMap = {};
    let nameArray = extLocales.menuMap[locale];
    if (nameArray) {
        let spokenNameArray = [];
        if (extLocales.spokenLanguages) {
            spokenNameArray = extLocales.spokenLanguages[locale];
            nameArray = nameArray.concat(spokenNameArray);
        }
        nameArray.forEach(lang => {
            localizedNameMap[lang.code] = lang.name;
        });
    }

    const tts = Object.fromEntries(Object.keys(TTS_LANGUAGE_INFO).map(key => {
        let name = TTS_LANGUAGE_INFO[key].defaultMessage;
        const localizedName = localizedNameMap[key];
        if (localizedName) {
            name = localizedName;
        }
        // Uppercase the first character of the name
        name = name.charAt(0).toUpperCase() + name.slice(1);
        return [`special.tts.${key}`, name];
    }));

    const makeyKeys = {
        space: extMessages['makeymakey.spaceKey'],
        left: extMessages['makeymakey.leftArrowShort'],
        up: extMessages['makeymakey.upArrowShort'],
        right: extMessages['makeymakey.rightArrowShort'],
        down: extMessages['makeymakey.downArrowShort'],
    };

    const makeymakey = Object.fromEntries(Object.values(allMenus.makeymakey_whenCodePressed).map(v => {
        const keys = v.translationKey.replace('special.makeymakey.', '').split('.');
        return [v.translationKey, keys.map(k => makeyKeys[k] || k).join(' ')];
    }));
    return Object.assign({}, translate, tts, makeymakey);
};

// End of copied and modified code

const asyncFuncy = async () => {
    const rawTranslations = {};
    const blocksPromise = [];
    const extensionsPromise = [];
    localeNames.forEach(name => {
        blocksPromise.push(import(`scratch-l10n/editor/blocks/${name}.json`, { assert: { type: 'json' } }));
        extensionsPromise.push(import(`scratch-l10n/editor/extensions/${name}.json`, { assert: { type: 'json' } }));
    });
    const blocksPromiseReturned = await Promise.all(blocksPromise);
    const extensionsPromiseReturned = await Promise.all(extensionsPromise);
    localeNames.forEach(
        (name, i) => rawTranslations[name] = Object.assign(
            {},
            extensionsPromiseReturned[i].default,
            blocksPromiseReturned[i].default,
            getExtMessages(name, extensionsPromiseReturned[i].default)
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
