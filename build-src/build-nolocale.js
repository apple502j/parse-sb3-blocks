import path from 'path';
import { writeFile } from 'fs/promises';

const content = '/* Translations omitted */\nexport default ({});';

const writeNolocale = filename => writeFile(path.resolve('src', 'block-mapping', filename), content, 'utf-8');

Promise.all([
    writeNolocale('translations.js'),
    writeNolocale('options.js')
]);
