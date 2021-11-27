/* jshint esversion: 6 */
/* jshint node: true */
/* jshint eqnull: true */
"use strict";

// https://stackoverflow.com/a/44145857/2925169
import {mod} from "./base";

function slice(array, start, stop, step) {
    if (!step) {
        return array.slice(start, stop);
    }
    let n = [];
    for (let i = start; i < stop; i += step) {
        n.push(array[i]);
    }
    return n;
}


function repeat(array, n) {
    return Array(n).fill(array).flat();
}


const zip = rows => rows[0].map((_, c) => rows.map(row => row[c]));

function Cycle(array) {
    this.array = array;
    this.index = 0;
}

// itertools.cycle
Cycle.prototype = {
    next: function () {
        if (!this.array) {
            return null;
        }
        return this.array[mod(this.index++, this.array.length)];
    }
};


export {
    repeat,
    slice,
    zip,
    Cycle,
};
