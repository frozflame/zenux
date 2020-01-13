/* globals module */
/* globals require */


var path = require('path');

module.exports = {
    mode: 'production',
    entry: './timer.js',
    resolve: {
        modules: ["node_modules"],
    },
    output: {
        filename: 'zenux_timer.min.js',
        path: path.resolve(__dirname, '../tests'),
        library: 'zenux_timer'
    }
};