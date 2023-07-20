const { confuse } = require('../dist/index.js');

module.exports = {
    input: './test/src/index.js',
    output: {
        file: './test/dist/index.js',
    },
    plugins: [confuse()],
};