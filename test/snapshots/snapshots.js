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
        const scripts = Array.isArray(config.scriptStart) ? config.scriptStart : [config.scriptStart];
        const snapshotPath = path.resolve(dirname, 'snapshots', filename.replace('.json', '.txt'));
        const snapshotFile = fs.readFileSync(snapshotPath, 'utf-8').trim();
        const snapshots = snapshotFile.split('\n\n');
        if (scripts.length !== snapshots.length) throw new Error(`Test case number mismatch for ${filename}: ${scripts.length} / ${snapshots.length}`);
        for (let i = 0; i < snapshots.length; i++) {
            const scratchblocks = toScratchblocks(scripts[i], config.blocks, config.locale, config.opts);
            if (scratchblocks === snapshots[i].trim()) {
                t.pass(scripts[i]);
            } else {
                t.fail(`toScratchblocks and snapshots didn't match:\n${scratchblocks}`);
            }
        }
    }));
