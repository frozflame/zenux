/*jshint esversion: 6 */
/* globals require */
/* globals console */
/* globals exports */


const _options = require("./options");


function getWebApp(mjAPI) {
    "use strict";
    // const bodyParser = require('body-parser');
    const compression = require('compression');
    const express = require('express');
    const helmet = require('helmet');
    const asciimath2latex = require('asciimath-to-latex');
    const app = express();

    app.use(express.json());
    app.use(helmet());  // ???
    app.use(express.urlencoded({extended: true}));    // for parsing application/x-www-form-urlencoded

    //Compress all routes
    app.use(compression());

    app.all("/am2tex", function (request, response) {
        let query = request.body || request.query;
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(asciimath2latex(query.math));
        response.end();
    });

    app.all("/", function (request, response) {
            let query = request.body || request.query;
            let opts = _options.getTypesetOptions(query);
            if (!opts.math) {
                response.status(400).send('Missing "math" field.');
                response.end();
                return;
            }
            console.log(query);
            mjAPI.typeset(
                // new TypesetOptions(query),
                opts,
                function (ro) {
                    response.writeHead(200, {'Content-Type': 'image/svg+xml'});
                    response.write(ro.svg);
                    response.end();
                }
            );
        }
    );
    return app;
}


function startWebApp(mjAPI, port) {
    "use strict";
    getWebApp(mjAPI).listen(port, '127.0.0.1', function () {
            console.log('mathjax wapi is listening on port ' + port);
        }
    );
}

exports.getWebApp = getWebApp;
exports.startWebApp = startWebApp;


