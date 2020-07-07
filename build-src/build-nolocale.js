import fs from 'fs';
import path from 'path';
import {promisify} from 'util';

const writeFile = promisify(fs.writeFile);
const content = '/* Translations omitted */\nexport default ({});';

const writeNolocale = filename => writeFile(path.resolve('src', 'block-mapping', filename), content, 'utf-8');

Promise.all([
    writeNolocale('translations.js'),
    writeNolocale('special-messages.gen.js'),
    writeNolocale('options.js')
]);
