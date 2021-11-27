/* jshint esversion: 6 */
/* jshint node: true */
/* jshint eqnull: true */
"use strict";


// polyfill for browsers where Object.values() is unavailable
// https://stackoverflow.com/a/23780751/2925169
Object.values = Object.values || function (o) {
    return Object.keys(o).map(function (k) {
        return o[k];
    });
};


/* mimic python dict.items() */
function items(obj) {
    return Object.entries(obj);
}

/* mimic python dict.keys() */
function keys(obj) {
    return Object.keys(obj);
}

/* mimic python dict.values() */
function values(obj) {
    return Object.values(obj);
}

function get(obj, key, fallback) {
    let null_values = [null, undefined];
    if (null_values.includes(obj)) {
        return fallback;
    }
    let val = obj[key];
    if (null_values.includes(val)) {
        return fallback;
    }
}

export {get, keys, items, values};
