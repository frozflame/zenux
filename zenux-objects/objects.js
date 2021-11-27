/* jshint esversion: 6 */
/* jshint node: true */
/* jshint eqnull: true */
/* globals require */
/* globals exports */

"use strict";


/* mimic python dict.items() */
function dict_items(obj) {
    return Object.entries(obj);
}

/* mimic python dict.keys() */
function dict_keys(obj) {
    return Object.keys(obj);
}


// polyfill for browsers where Object.values() is unavailable
// https://stackoverflow.com/a/23780751/2925169
Object.values = Object.values || function (o) {
    return Object.keys(o).map(function (k) {
        return o[k];
    });
};


/* mimic python dict.values() */
function dict_values(obj) {
    return Object.values(obj);
}


function dict_get(obj, key, fallback) {
    let null_values = [null, undefined];
    if (null_values.includes(obj)) {
        return fallback;
    }
    let val = obj[key];
    if (null_values.includes(val)) {
        return fallback;
    }
}


const zip = rows => rows[0].map((_, c) => rows.map(row => row[c]));

// https://stackoverflow.com/a/44145857/2925169
function list_slice(array, start, stop, step) {
    if (!step) {
        return array.slice(start, stop);
    }
    let n = [];
    for (let i = start; i < stop; i += step) {
        n.push(array[i]);
    }
    return n;
}

function str_join(sep, strings) {
    return strings.join(sep);
}


function str_slice(string, start, stop, step) {
    if (!step) {
        return string.slice(start, stop);
    }
    return list_slice(string.split(''), start, stop, step).join('');
}


function updateAllowedProps(target, source, allowedKeys) {
    allowedKeys.map(function (key) {
        if (key in source) {
            target[key] = source[key];
        }
    });
}


function updateMissingProps(target, source) {
    Object.keys(source).map(function (key) {
        if (!(key in target)) {
            target[key] = source[key];
        }
    });
}


function updateExistingProps(target, source) {
    Object.keys(source).map(function (key) {
        if (key in target) {
            target[key] = source[key];
        }
    });
}


function mergeProps(primary, secondary) {
    let ro = {};
    Object.assign(ro, secondary);
    Object.assign(ro, primary);
    return ro;
}


exports.updateAllowedProps = updateAllowedProps;
exports.updateMissingProps = updateMissingProps;
exports.updateExistingProps = updateExistingProps;
exports.mergeProps = mergeProps;

exports.update_allowed_props = updateAllowedProps;
exports.update_missing_props = updateMissingProps;
exports.update_existing_props = updateExistingProps;
exports.merge_props = mergeProps;

exports.dict_keys = dict_keys;
exports.dict_values = dict_values;
exports.dict_items = dict_items;
exports.dict_get = dict_get;
exports.zip = zip;

exports.list_slice = list_slice;
exports.str_slice = str_slice;
exports.str_join = str_join;


