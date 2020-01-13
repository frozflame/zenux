/* globals exports */

function confine(index, limit) {
    if (index < 0) {
        return 0;
    }
    if (index >= limit) {
        return limit - 1;
    }
    return index;
}


function modulo(index, limit) {
    return ((index % limit) + limit) % limit;
}


function _initCursor(cursor, index, limit, check) {
    cursor._index = index;
    cursor._limit = limit;
    cursor.valueOf = function () {
        cursor._index = check(cursor._index, cursor._limit);
        return cursor._index;
    };
    cursor.toString = function () {
        return cursor.valueOf().toString();
    };
    cursor.prev = function () {
        cursor._index--;
        return cursor;
    };
    cursor.next = function () {
        cursor._index++;
        return cursor;
    };
    cursor.copy = function () {
        return Object.assign({}, cursor);
    };
    return cursor;
}

function Cursor(index, limit) {
    var cursor = _initCursor(this, index, limit, confine);
    cursor.first = function () {
        return cursor._index <= 0;
    };
    cursor.last = function () {
        return cursor._index >= cursor._limit - 1;
    };
}


function CircularCursor(index, limit) {
    _initCursor(this, index, limit, modulo);
}


exports.confine = confine;
exports.modulo = modulo;
exports.Cursor = Cursor;
exports.CircularCursor = CircularCursor;
