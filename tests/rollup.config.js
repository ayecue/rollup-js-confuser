const { confuse } = require('../dist/index.js');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs').default;

module.exports = {
    input: 'tests/src/index.js',
    output: {
        name: 'test',
        file: 'tests/dist/index.js',
        format: 'cjs'
    },
    plugins: [
        commonjs({
            sourceMap: false
        }),
        nodeResolve({
            sourceMap: false,
            preferBuiltins: false
        }),
        confuse({
            target: 'node',
            preset: 'medium',
            deadCode: 1,
            minify: false,
            compact: false
        })
    ],
};