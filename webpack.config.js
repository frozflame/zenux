/* globals module */
/* globals require */
/* globals __dirname */

module.exports = {
    mode: 'production',
    entry: './zenux.js',
    resolve: {
        modules: ["node_modules"]
    },
    output: {
        filename: '../dist/zenux.min.js',
        path: __dirname,
        library: {
            name: 'zenux',
            type: 'umd',
        }
    }
};