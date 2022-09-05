import chalk from 'chalk';
// click.js: a mock version of tap

class Test {
    constructor(testName) {
        this.testName = testName;
    }

    comment(content) {
        console.log('COMMENT:', content);
    }

    pass(content) {
        console.log(chalk.cyan('PASS:'), this.testName, content || '');
    }

    fail(content) {
        console.error(chalk.red('FAIL:'), this.testName, content);
        process.exitCode = 1;
    }
}

export const test = (testName, callback) => callback(new Test(testName));
