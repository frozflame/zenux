/* jshint esversion: 6 */
/* jshint node: true */
/* jshint eqnull: true */
"use strict";

// https://stackoverflow.com/a/44145857/2925169

export function slice(array, start, stop, step) {
    if (!step) {
        return array.slice(start, stop);
    }
    let n = [];
    for (let i = start; i < stop; i += step) {
        n.push(array[i]);
    }
    return n;
}


export function repeat(array, n) {
    return Array(n).fill(array).flat();
}


export const zip = rows => rows[0].map((_, c) => rows.map(row => row[c]));

