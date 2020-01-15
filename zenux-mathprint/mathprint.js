/* jshint esversion: 6 */

/* globals require */
/* globals process */

/* jshint node: true */
/* jshint eqnull: true */

const mjAPI = require("mathjax-node");

// console.log(process.argv);

if (process.argv.length < 3) {
    require("./web").startWebApp(mjAPI, 8888);
} else {
    require("./text").textToSVG(mjAPI);
}

