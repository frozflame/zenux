/* globals module */
/* globals require */
/* globals __dirname */

module.exports = {
    mode: 'production',
    entry: './fuzzish.js',
    resolve: {
        modules: ["node_modules"]
    },
    output: {
        filename: '../dist/zenux-fuzzish.min.js',
        path: __dirname,
        library: {
            name: 'zenux_fuzzish',
            type: 'umd',
        }
    }
};