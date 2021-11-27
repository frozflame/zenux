/* jshint esversion: 6 */
/* jshint node: true */
/* jshint eqnull: true */
/* globals require */
/* globals exports */

"use strict";
import Fuzzyset from "fuzzyset.js";

const Fuzzish = function (names) {
    this.names = names;
    this.length = names.length;
    this.fuzzyset = new Fuzzyset(names);
};


function _array_push_unique(array, value) {
    if (!array.includes(value)) {
        array.push(value);
    }
}


Fuzzish.prototype = {
    search: function (keyword, limit) {
        limit = limit || 7;
        if (!keyword) {
            return [];
        }
        keyword = keyword.toLowerCase();
        let results = [];
        for (let i = 0; i < this.length && results.length <= limit; i++) {
            let name = this.names[i];
            if (name.toLowerCase().startsWith(keyword)) {
                results.push(name);
            }
        }

        for (let i = 0; i < this.names.length && results.length <= limit; i++) {
            let name = this.names[i];
            if (name.toLowerCase().includes(keyword)) {
                _array_push_unique(results, name);
            }
        }

        if (results.length >= 5) {
            return results;
        }
        let fuzzy_results = this.fuzzyset.get(keyword) || [];
        for (let i = 0; i < fuzzy_results.length && results.length <= limit; i++) {
            let value = fuzzy_results[i][1];
            if (!results.includes(value)) {
                results.push(value);
            }
        }
        return results;
    }
};

export {Fuzzish};
