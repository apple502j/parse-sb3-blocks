import fs from 'fs';
import path from 'path';
import { test } from '../click.js';
import { toScratchblocks } from '../../src/index.js';

const dirname = path.resolve('test', 'snapshots');
const fixturesDir = path.resolve(dirname, 'fixtures');

fs.readdirSync(fixturesDir)
    .filter(filename => filename.endsWith('.json'))
    .forEach(filename => test(filename, t => {
        const filePath = path.resolve(fixturesDir, filename);
        const jsonFile = fs.readFileSync(filePath, 'utf-8');
        const config = JSON.parse(jsonFile);
        const scratchblocks = toScratchblocks(config.scriptStart, config.blocks, config.locale, config.opts);
        const snapshotPath = path.resolve(dirname, 'snapshots', filename.replace('.json', '.txt'));
        const snapshotFile = fs.readFileSync(snapshotPath, 'utf-8').trim();
        if (scratchblocks === snapshotFile) {
            t.pass();
        } else {
            t.fail(`toScratchblocks and snapshots didn't match:\n${scratchblocks}`);
        }
    }));
