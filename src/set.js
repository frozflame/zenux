#!/usr/bin/env node
/* jshint esversion: 6 */
/* jshint node: true */
/* jshint curly: true */
/* jshint eqnull: false */
/* globals ObjectId */
/* globals ISODate */
/* globals exports */
/* globals console */
/* globals module */
/* globals require */
/* globals __dirname */

/*
 * options of jshint: https://jshint.com/docs/options/
 * webpack output.library: https://webpack.js.org/configuration/output/#outputlibrary
 * use event.key: https://keycode.info/
 */

"use strict";


export function union(a, b){
    return new Set([...a, ...b]);
}

export function intersection(a, b){
    return new Set([...a].filter(x => b.has(x)));
}
export function difference(a, b){
    return new Set([...a].filter(x => !b.has(x)));
}
