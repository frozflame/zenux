#!/usr/bin/env nodejs

/*
 *  A hello world in Node.static
 *
 */

var http = require('http');

http.createServer(function (req, res) {
    "use strict";
    // `req` is NOT used in this example
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!'); 
}).listen(8100, "127.0.0.1");

console.log('Server running at http://127.0.0.0:8100/');
