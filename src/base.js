/* jshint esversion: 6 */
/* jshint node: true */
/* jshint eqnull: true */

"use strict";

export function is_null(obj) {
    return [null, undefined].includes(obj);
}

/**
 * @param {number} a
 * @param {number} n - an integer
 */
export function mod(a, n) {
    if (n < 0) {
        return -mod(a, -n);
    }
    a %= n;
    return a < 0 ? a + n : a;
}

/**
 * @param {number} x
 * @param {number} min
 * @param {number} max
 */
export function clamp(x, min, max) {
    if (!is_null(min) && x < min) {
        return min;
    }
    if (!is_null(max) && x > max) {
        return max;
    }
    return x;
}
