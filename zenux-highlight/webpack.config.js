/* globals module */
/* globals require */
/* globals __dirname */


var path = require('path');

module.exports = {
    mode: 'production',
    entry: './highlight.js',
    resolve: {
        modules: ["node_modules"],
    },
    output: {
        filename: 'zenux_highlight.min.js',
        path: path.resolve(__dirname, '../min'),
        library: 'zenux_highlight'
    }
};