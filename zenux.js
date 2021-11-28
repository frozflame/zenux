/* jshint esversion: 6 */
/* jshint node: true */
/* jshint eqnull: true */
"use strict";

import {mod, clamp, is_null} from "./src/base";
import * as date_ from "./src/date";
import * as dict_ from "./src/dict";
import * as list_ from "./src/list";
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
export function date(string){
    // TODO: use strptime
    return new Date(string);
}

export function dict(obj) {
    return obj || {};
}

export function list(obj) {
    if (obj instanceof String || typeof obj === 'string') {
        return obj.split('');
    }
    return obj;
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

Object.assign(date, date_);
Object.assign(dict, dict_);
Object.assign(list, list_);
Object.assign(str, str_);
export {
    mod, clamp, is_null,
};
