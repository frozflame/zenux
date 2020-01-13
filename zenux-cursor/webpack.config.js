/* globals module */
/* globals require */

var path = require('path');

module.exports = {
    mode: 'production',
    entry: './cursor.js',
    resolve: {
        modules: ["node_modules"],
    },
    output: {
        filename: 'zenux_cursor.min.js',
        path: path.resolve(__dirname, '../_test'),
        library: 'zenux_cursor'
    }
};