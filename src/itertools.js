/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

import {mod} from "./base";

/**
 * @param {Array} array
 */
export function Cycle(array) {
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
