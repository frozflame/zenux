/* jshint esversion: 6 */
/* jshint node: true */
/* jshint eqnull: true */
"use strict";

import {mod, clamp} from "./src/base";
import * as date from "./src/date";
import * as dict from "./src/dict";
import * as list from "./src/list";
import * as str from "./src/str";


function json_dumps(obj, indent){
    return JSON.stringify(obj, undefined, indent);
}

const json_loads = JSON.parse;


export {
    mod, clamp,
    list, dict, str, date,
    json_dumps, json_loads,
};
