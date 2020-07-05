import {default as allBlocks, allMenus} from './all-blocks.js';
import translations from './translations.js';
import localeOptions from './options.js';
import {default as specialMessages, specialMessageMap} from './special-messages.js';

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
        if (localeOptions[locale] && localeOptions[locale][opcode]) {
            return localeOptions[locale][opcode];
        }
        return {};
    }
    return allBlocks[opcode].defaultOptions || {};
};

const isSpecialBlock = opcode => allBlocks[opcode].isSpecialBlock;

const getSpecialMessage = (locale, key) => {
    if (specialMessageMap.hasOwnProperty(key)) return getMessageForLocale(locale, specialMessageMap[key]);
    if (specialMessages[locale] && specialMessages[locale][key]) {
        return specialMessages[locale][key];
    }
    return specialMessages.default[key];
};

const isSpecialMenuValue = (opcode, value) => allMenus[opcode].hasOwnProperty(value);

const getMenuItemForLocale = (locale, opcode, value) => {
    const translationKey = allMenus[opcode][value].translationKey;
    if (translations[locale] && translations[locale][translationKey]) {
        return translations[locale][translationKey];
    }
    return allMenus[opcode][value].defaultMessage;
};

export {
    getMessageForLocale,
    isSpecialBlock,
    getSpecialMessage,
    isSpecialMenuValue,
    getMenuItemForLocale
};
