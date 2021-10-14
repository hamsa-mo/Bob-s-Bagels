const test = {
    assertEquals(val1, val2) {
        if (val1 !== val2) throw new Error(`Custom error message`);
    },

    it(str, testFunc) {
        try {
            testFunc();
            console.log("\x1b[32m%s\x1b[0m", `\t${str} is true`);
        }
        catch (err) {
            console.log("\x1b[31m%s\x1b[0m", `\t${str} is false`);
            console.error(err.message);
            console.log(err.stack);
        }
    },

    xit(str) {
        console.log("\x1b[31m%s\x1b[0m", `\tTEST SKIPPED: ${str}`);
    }
}

module.exports = test;

