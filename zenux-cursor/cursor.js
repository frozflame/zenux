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


var _shared_prototype = {
    check: confine,
    valueOf: function () {
        this._index = this.check(this._index, this._limit);
        return this._index;
    },
    toString: function () {
        return this.valueOf().toString();
    },
    prev: function () {
        this._index--;
        return this;
    },
    next: function () {
        this._index++;
        return this;
    },
    copy: function () {
        return this.constructor(this._index, this._limit);
    }
};

function _initCursor(cursor, index, limit) {
    cursor._index = index;
    cursor._limit = limit;
    return cursor;
}

function Cursor(index, limit) {
    _initCursor(this, index, limit);
}

function CircularCursor(index, limit) {
    _initCursor(this, index, limit);
}


Cursor.prototype = {
    first: function () {
        return this._index <= 0;
    },
    last: function () {
        return this._index >= this._limit - 1;
    }
};
Object.setPrototypeOf(Cursor.prototype, _shared_prototype);


CircularCursor.prototype = {
    check: modulo
};

Object.setPrototypeOf(CircularCursor.prototype, _shared_prototype);


exports.confine = confine;
exports.modulo = modulo;
exports.Cursor = Cursor;
exports.CircularCursor = CircularCursor;
