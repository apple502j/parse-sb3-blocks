import colors from 'colors'; // eslint-disable-line no-unused-vars
// click.js: a mock version of tap

class Test {
    constructor (testName) {
        this.testName = testName;
    }

    comment (content) {
        console.log('COMMENT:', content);
    }

    pass (content) {
        console.log('PASS:'.cyan, this.testName, content || '');
    }

    fail (content) {
        console.error('FAIL:'.red, this.testName, content);
        process.exitCode = 1;
    }
}

export const test = (testName, callback) => callback(new Test(testName));
