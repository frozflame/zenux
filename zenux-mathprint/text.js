/*jshint esversion: 6 */

/* globals require */
/* globals process */
/* globals console */
/* globals exports */


const fs = require('fs');
const _options = require("./options");


function textToSVG(mjAPI) {
    "use strict";
    const lineReader = require('readline').createInterface({
        input: fs.createReadStream(process.argv[2])
    });

    lineReader.on('line', function (line) {
        let parts = line.split(/\s+(.*)/);
        let name = parts[0];
        let math = parts[1];
        if (!(name && math)) {
            return;
        }
        let filename = name + '.svg';

        mjAPI.typeset(
            _options.getTypesetOptions({math: math}),
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
}

exports.textToSVG = textToSVG;


