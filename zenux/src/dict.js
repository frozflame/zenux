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
export function items(obj) {
    return Object.entries(obj);
}

/* mimic python dict.keys() */
export function keys(obj) {
    return Object.keys(obj);
}

/* mimic python dict.values() */
export function values(obj) {
    return Object.values(obj);
}

export function get(obj, key, default_) {
    let null_values = [null, undefined];
    if (null_values.includes(obj)) {
        return default_;
    }
    let val = obj[key];
    if (null_values.includes(val)) {
        return default_;
    }
}

export function setdefault(obj, key, default_) {
    let val = obj[key];
    if (val === undefined) {
        obj[key] = default_;
        return default_;
    }
    return val;
}

export function pop(obj, key, default_) {
    let val = obj[key];
    if (val === undefined) {
        return default_;
    }
    delete obj[key];
    return val;
}

export function popitem(obj) {
    let _keys = keys(obj);
    if (!_keys) {
        return undefined;
    }
    let key = _keys[0];
    return [key, obj[key]];
}

export function fromkeys(keys, val) {
    let obj = {};
    if (val === undefined){
        val = null;
    }
    keys.forEach(function (k) {
        obj[k] = val;
    });
    return obj;
}

export function update(obj, other){
    return Object.assign(obj, other);
}