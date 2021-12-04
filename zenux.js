/* jshint esversion: 6 */
/* jshint node: true */
/* jshint eqnull: true */
"use strict";

import {mod, clamp, is_null} from "./src/base";
import * as date_ from "./src/date";
import * as dict_ from "./src/dict";
import * as list_ from "./src/list";
import * as set_ from "./src/set";
import * as str_ from "./src/str";


export const json = {
    loads: JSON.parse,
    /**
     * @param {Object} obj
     * @param {number} indent - an integer
     */
    dumps: function (obj, indent) {
        return JSON.stringify(obj, undefined, indent);
    }
};


/**
 * @param {String} string
 */
export function date(string) {
    // TODO: use strptime
    return new Date(string);
}

export function dict(obj) {
    return obj || {};
}


/**
 * @return {boolean}
 */
export function is_iterable(obj) {
    // checks for null and undefined
    if (is_null(obj)) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}

function _is_htmlcollection_or_nodelist(obj) {
    // https://stackoverflow.com/a/222847/2925169
    // https://stackoverflow.com/a/36857902/2925169
    return (
        HTMLCollection && HTMLCollection.prototype.isPrototypeOf(obj)
    ) || (
        NodeList && NodeList.prototype.isPrototypeOf(obj)
    );
}

export function list(obj) {
    if (obj instanceof String || typeof obj === 'string') {
        return obj.split('');
    }
    // https://stackoverflow.com/a/222847/2925169
    // https://stackoverflow.com/a/36857902/2925169
    if (_is_htmlcollection_or_nodelist(obj)) {
        // return Array.prototype.slice.call(obj);
        return [...obj];
    }
    // https://stackoverflow.com/a/222847/2925169
    if (is_iterable(obj)) {
        return [...obj];
    }
    return obj;
}

export function set(obj) {
    return new Set(obj);
}

export function str(obj) {
    return '' + obj;
}

export function int(value) {
    return parseInt(value);
}

export function float(value) {
    return parseFloat(value);
}

export function _pollute() {
    if (!window || !window.zenux) {
        return;
    }
    Object.assign(window, window.zenux);
}

Object.assign(date, date_);
Object.assign(dict, dict_);
Object.assign(list, list_);
Object.assign(set, set_);
Object.assign(str, str_);
export {
    mod, clamp, is_null,
};
