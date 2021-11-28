/* jshint esversion: 6 */
/* jshint node: true */
/* jshint eqnull: true */

"use strict";

export function _is_null(obj) {
    return [null, undefined].includes(obj);
}

export function mod(a, n) {
    if (n < 0) {
        return -mod(a, -n);
    }
    a %= n;
    return a < 0 ? a + n : a;
}

export function clamp(x, min, max) {
    if (!_is_null(min) && x < min){
        return min;
    }
    if (!_is_null(max) && x > max){
        return max;
    }
    return x;
}
