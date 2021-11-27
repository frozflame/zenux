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

function _is_null(obj) {
    return [null, undefined].includes(obj);
}


if (typeof (String.prototype.trim) === "undefined") {
    String.prototype.trim = function () {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

function _lstrip(s, chars) {
    let start = 0;
    while (chars.indexOf(s[start]) >= 0) {
        start += 1;
    }
    return s.substr(start);
}


function _rstrip(s, chars) {
    let end = s.length - 1;
    while (chars.indexOf(s[end]) >= 0) {
        end -= 1;
    }
    return s.substr(0, end + 1);
}


// https://davidbieber.com/snippets/2020-12-26-pythons-strip-lstrip-and-rstrip-in-javascript/
function str_strip(s, chars) {
    if (_is_null(chars)) {
        return s.trim();
    }
    return _rstrip(_lstrip(s, chars), chars);
}


function str_lstrip(s, chars) {
    if (_is_null(chars)) {
        return s.replace(/^\s+/gm, '');
    }
    return _lstrip(s, chars);
}


function str_rstrip(s, chars) {
    if (_is_null(chars)) {
        return s.replace(/\s+$/gm, '');
    }
    return _rstrip(s, chars);
}


function update_allowed_props(target, source, allowedKeys) {
    allowedKeys.map(function (key) {
        if (key in source) {
            target[key] = source[key];
        }
    });
}


function update_missing_props(target, source) {
    Object.keys(source).map(function (key) {
        if (!(key in target)) {
            target[key] = source[key];
        }
    });
}


function update_existing_props(target, source) {
    Object.keys(source).map(function (key) {
        if (key in target) {
            target[key] = source[key];
        }
    });
}


function merge_props(primary, secondary) {
    let ro = {};
    Object.assign(ro, secondary);
    Object.assign(ro, primary);
    return ro;
}


const updateAllowedProps = update_allowed_props;
const updateMissingProps = update_missing_props;
const updateExistingProps = update_existing_props;
const mergeProps = merge_props;

export {
    update_allowed_props,
    update_missing_props,
    update_existing_props,
    merge_props,
    updateAllowedProps,
    updateMissingProps,
    updateExistingProps,
    mergeProps,
    dict_keys,
    dict_values,
    dict_items,
    dict_get,
    zip,
    list_slice,
    str_slice,
    str_join,
    str_strip,
    str_lstrip,
    str_rstrip,
};
