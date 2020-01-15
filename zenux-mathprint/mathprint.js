/* jshint esversion: 6 */
/* globals require */
/* jshint node: true */
/* jshint eqnull: true */
/* jshint curly: false */


const fs = require('fs');
const mathjaxAPI = require("mathjax-node");


mathjaxAPI.config({
    MathJax: {}
});

mathjaxAPI.start();

const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(process.argv[2])
});


lineReader.on('line', function (line) {
    "use strict";
    let parts = line.split(/\s+(.*)/);
    let name = parts[0];
    let math = parts[1];
    if (!(name && math)) {
        return;
    }
    let filename = name + '.svg';

    mathjaxAPI.typeset({
            ex: 6,
            math: math,
            format: "AsciiMath",
            svg: true
        },
        function (result) {
            fs.writeFile(filename, result.svg, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("Saved: " + filename);
            });
        }
    );
});


