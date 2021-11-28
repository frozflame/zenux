/* jshint esversion: 6 */
/* jshint node: true */
/* jshint eqnull: true */

"use strict";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


import {slice as _list_slice} from "./list";
import {is_null} from "./base";

if (typeof (String.prototype.trim) === "undefined") {
    String.prototype.trim = function () {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        value: function (search, rawPos) {
            let pos = rawPos > 0 ? rawPos | 0 : 0;
            return this.substring(pos, pos + search.length) === search;
        }
    });
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith#polyfill
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (search, this_len) {
        if (this_len === undefined || this_len > this.length) {
            this_len = this.length;
        }
        return this.substring(this_len - search.length, this_len) === search;
    };
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#polyfill
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        if (search instanceof RegExp) {
            throw TypeError('first argument must not be a RegExp');
        }
        if (start === undefined) {
            start = 0;
        }
        return this.indexOf(search, start) !== -1;
    };
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat#polyfill
// with modifications
if (!String.prototype.repeat) {
    String.prototype.repeat = function (count) {
        if (this == null) {
            throw new TypeError("can't convert " + this + " to object");
        }

        let str = '' + this;
        // To convert string to integer.
        count = +count;
        // Check NaN
        if (!count) {
            count = 0;
        }

        if (count < 0) {
            throw new RangeError('repeat count must be non-negative');
        }

        if (count === Infinity) {
            throw new RangeError('repeat count must be less than infinity');
        }

        count = Math.floor(count);
        if (str.length === 0 || count === 0) {
            return '';
        }

        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (str.length * count >= 268435456) {
            throw new RangeError('repeat count must not overflow maximum string size');
        }

        let maxCount = str.length * count;
        count = Math.floor(Math.log(count) / Math.log(2));
        while (count) {
            str += str;
            count--;
        }
        str += str.substring(0, maxCount - str.length);
        return str;
    };
}

/**
 * @param {String} sep
 * @param {Array} strings
 */
export function join(sep, strings) {
    return strings.join(sep);
}


/**
 * @param {String} string
 * @param {number} start - an integer
 * @param {number} stop - an integer
 * @param {number} step - an integer
 **/
export function slice(string, start, stop, step) {
    if (!step) {
        return string.slice(start, stop);
    }
    return _list_slice(string.split(''), start, stop, step).join('');
}


/**
 * @param {String} s
 * @param {String} chars
 **/
function _lstrip(s, chars) {
    let start = 0;
    while (chars.indexOf(s[start]) >= 0) {
        start += 1;
    }
    return s.substr(start);
}

/**
 * @param {String} s
 * @param {String} chars
 **/
function _rstrip(s, chars) {
    let end = s.length - 1;
    while (chars.indexOf(s[end]) >= 0) {
        end -= 1;
    }
    return s.substr(0, end + 1);
}

/**
 * @param {String} s
 * @param {String} chars
 **/
export function strip(s, chars) {
    if (is_null(chars)) {
        return s.trim();
    }
    return _rstrip(_lstrip(s, chars), chars);
}

/**
 * @param {String} s
 * @param {String} chars
 **/
export function lstrip(s, chars) {
    if (is_null(chars)) {
        return s.replace(/^\s+/gm, '');
    }
    return _lstrip(s, chars);
}

/**
 * @param {String} s
 * @param {String} chars
 **/
export function rstrip(s, chars) {
    if (is_null(chars)) {
        return s.replace(/\s+$/gm, '');
    }
    return _rstrip(s, chars);
}

/**
 * @param {String} s
 * @param {number} n must be an integer
 **/
export function repeat(s, n) {
    return s.repeat(n);
}

/**
 * @param {String} substring
 * @param {String} string
 **/
export function in_(substring, string) {
    return string.includes(substring);
}

/**
 * @param {String} s
 **/
export function lower(s) {
    return s.toLowerCase();
}

/**
 * @param {String} s
 **/
export function upper(s) {
    return s.toUpperCase();
}


/**
 * @param {String} string
 * @param {String} prefix
 **/
export function startswith(string, prefix) {
    return string.startsWith(prefix);
}


/**
 * @param {String} string
 * @param {String} suffix
 **/
export function endswith(string, suffix) {
    return string.endsWith(suffix);
}

// ref: https://davidbieber.com/snippets/2020-12-26-pythons-strip-lstrip-and-rstrip-in-javascript/

export const ascii_lowercase = 'abcdefghijklmnopqrstuvwxyz';
export const ascii_uppercase = ascii_lowercase.toUpperCase();
export const ascii_letters = ascii_lowercase + ascii_uppercase;
export const digits = '0123456789';
export const octdigits = '01234567';
export const hexdigits = '0123456789abcdefABCDEF';
export const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
export const whitespace = ' \t\n\r\v\f';
export const printable = digits + ascii_letters + punctuation + whitespace;

