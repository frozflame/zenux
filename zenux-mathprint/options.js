/* jshint esversion: 6 */

/* globals require */
/* globals exports */

/* jshint node: true */
/* jshint eqnull: true */

const zxo = require("zenux-objects");

function start(mjAPI) {
    "use strict";
    mjAPI.config({
        MathJax: {}
    });
    mjAPI.start();
}


const _defaultTypesetOptions = {
    svg: true,
    math: null,
    format: "AsciiMath",
};


function getTypesetOptions(query) {
    "use strict";
    let ro = {};
    Object.assign(ro, _defaultTypesetOptions);
    zxo.updateExistingProps(ro, query);
    return ro;
}


exports.start = start;
exports.getTypesetOptions = getTypesetOptions;
