/* jshint esversion: 6 */
/* jshint node: true */
/* jshint eqnull: true */

"use strict";
export function mod(a, n) {
    if (n < 0) {
        return -mod(a, -n);
    }
    return (a + n) % n;
}