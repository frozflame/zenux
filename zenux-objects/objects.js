/* jshint esversion: 6 */

/* globals require */
/* globals exports */

/* jshint node: true */

/* jshint eqnull: true */

function updateAllowedProps(target, source, allowedKeys) {
    "use strict";
    allowedKeys.map(function (key) {
        if (key in source) {
            target[key] = source[key];
        }
    });
}


function updateMissingProps(target, source) {
    "use strict";
    Object.keys(source).map(function (key) {
        if (!(key in target)) {
            target[key] = source[key];
        }
    });
}


function updateExistingProps(target, source) {
    "use strict";
    Object.keys(source).map(function (key) {
        if (key in target) {
            target[key] = source[key];
        }
    });
}


function mergeProps(primary, secondary) {
    "use strict";
    let ro = {};
    Object.assign(ro, secondary);
    Object.assign(ro, primary);
    return ro;
}


exports.updateAllowedProps = updateAllowedProps;
exports.updateMissingProps = updateMissingProps;
exports.updateExistingProps = updateExistingProps;
exports.mergeProps = mergeProps;
