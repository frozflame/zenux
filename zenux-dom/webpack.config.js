/* globals module */
/* globals require */
/* globals __dirname */


var path = require('path');

module.exports = {
    mode: 'production',
    entry: './dom.js',
    resolve: {
        modules: ["node_modules"],
    },
    output: {
        filename: 'zenux_dom.min.js',
        path: path.resolve(__dirname, '../min'),
        library: 'zenux_dom'
    }
};