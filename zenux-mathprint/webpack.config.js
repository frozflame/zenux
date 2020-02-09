/*jshint esversion: 6 */
/* globals module */
/* globals require */
/* globals __dirname */

const path = require('path');

module.exports = {
    mode: "production",
    entry: './mathprint.js',
    target: 'node',
    externals: [],
    resolve: {
        modules: [
            "node_modules"
        ]
    },
    output: {
        filename: 'mathprint.min.js',
        path: path.resolve(__dirname, '../min')
    }
};
