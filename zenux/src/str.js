/* jshint esversion: 6 */
/* jshint node: true */
/* jshint eqnull: true */
"use strict";

import {slice as _list_slice} from "./list";

if (typeof (String.prototype.trim) === "undefined") {
    String.prototype.trim = function () {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

function join(sep, strings) {
    return strings.join(sep);
}


function slice(string, start, stop, step) {
    if (!step) {
        return string.slice(start, stop);
    }
    return _list_slice(string.split(''), start, stop, step).join('');
}


function _is_null(obj) {
    return [null, undefined].includes(obj);
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

function strip(s, chars) {
    if (_is_null(chars)) {
        return s.trim();
    }
    return _rstrip(_lstrip(s, chars), chars);
}

function lstrip(s, chars) {
    if (_is_null(chars)) {
        return s.replace(/^\s+/gm, '');
    }
    return _lstrip(s, chars);
}

function rstrip(s, chars) {
    if (_is_null(chars)) {
        return s.replace(/\s+$/gm, '');
    }
    return _rstrip(s, chars);
}

export {
    join,
    slice,
    rstrip,
    lstrip,
    strip
};

// ref: https://davidbieber.com/snippets/2020-12-26-pythons-strip-lstrip-and-rstrip-in-javascript/
