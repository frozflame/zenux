/* globals module */
/* globals require */
/* globals __dirname */

var path = require('path');

module.exports = {
    mode: 'production',
    entry: './play.js',
    resolve: {
        modules: ["node_modules"]
    },
    output: {
        filename: 'zenux_play.min.js',
        path: path.resolve(__dirname, '../_test'),
        library: 'zenux_play'
    }
};