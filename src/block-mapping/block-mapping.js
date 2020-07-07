import {default as allBlocks, allMenus} from './all-blocks.js';
import translations from './translations.js';
import localeOptions from './options.js';
import {default as specialMessages, specialMessageMap} from './special-messages.js';

const _translationKeyToOpcode = {};
Object.keys(allBlocks).forEach(opcode => {
    const entry = allBlocks[opcode];
    if (entry.isSpecialBlock || entry.noTranslation) return;
    const translationKey = entry.translationKey || opcode.toUpperCase();
    if (_translationKeyToOpcode.hasOwnProperty(translationKey)) return;
    _translationKeyToOpcode[translationKey] = opcode;
});

const getOpcodeFromTranslationKey = translationKey => _translationKeyToOpcode[translationKey];

const getTranslationKeyFromValue = (locale, value) => {
    const localeTranslation = translations[locale];
    let candidates = [];
    if (localeTranslation) {
        candidates = Object.keys(localeTranslation).filter(key => localeTranslation[key] === value);
    } else {
        candidates = Object.values(allBlocks).filter(item => item.defaultMessage === value);
    }
    return candidates.length ? candidates[0] : null;
};

const getMessageForLocale = (locale, opcode) => {
    const translationKey = allBlocks[opcode].translationKey || opcode.toUpperCase();
    if (translations[locale] && translations[locale][translationKey]) {
        return translations[locale][translationKey];
    }
    return allBlocks[opcode].defaultMessage;
};

const getOptsForLocale = (locale, opcode) => {
    const translationKey = allBlocks[opcode].translationKey || opcode.toUpperCase();
    if (translations[locale] && translations[locale][translationKey]) {
        if (localeOptions[locale] && localeOptions[locale][translationKey]) {
            return ({
                category: localeOptions[locale][translationKey]
            });
        }
        return {};
    }
    return allBlocks[opcode].defaultOptions || {};
};

const getSpecialMessage = (locale, key) => {
    if (specialMessageMap.hasOwnProperty(key)) return getMessageForLocale(locale, specialMessageMap[key]);
    if (specialMessages[locale] && specialMessages[locale][key]) {
        return specialMessages[locale][key];
    }
    return specialMessages.default[key];
};

const isSpecialMenuValue = (opcode, value) => (allMenus[opcode] || []).hasOwnProperty(value);

const getMenuItemForLocale = (locale, opcode, value) => {
    const translationKey = allMenus[opcode][value].translationKey;
    if (translations[locale] && translations[locale][translationKey]) {
        return translations[locale][translationKey];
    }
    return allMenus[opcode][value].defaultMessage;
};

export {
    getMessageForLocale,
    getOptsForLocale,
    getSpecialMessage,
    isSpecialMenuValue,
    getMenuItemForLocale,
    getOpcodeFromTranslationKey,
    getTranslationKeyFromValue
};
