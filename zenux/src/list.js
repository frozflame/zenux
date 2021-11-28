/* jshint esversion: 6 */
/* jshint node: true */
/* jshint eqnull: true */
"use strict";

// https://stackoverflow.com/a/44145857/2925169

/**
 * @param {Array} array
 * @param {number} start - an integer
 * @param {number} stop - an integer
 * @param {number} step - an integer
 */
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


/**
 * @param {Array} array
 * @param {number} n - an integer
 */
export function repeat(array, n) {
    return Array(n).fill(array).flat();
}


/**
 * @param {Array} rows
 */
export const zip = rows => rows[0].map((_, c) => rows.map(row => row[c]));

