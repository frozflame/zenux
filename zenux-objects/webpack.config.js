/* globals module */
/* globals require */
/* globals __dirname */

module.exports = {
    mode: 'production',
    entry: './objects.js',
    resolve: {
        modules: ["node_modules"]
    },
    output: {
        filename: '../dist/zenux-objects.min.js',
        path: __dirname,
        library: {
            name: 'zenux_objects',
            type: 'umd',
        }
    }
};