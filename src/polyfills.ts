export function patch() {
    // polyfill for browsers where Object.values() is unavailable
    // https://stackoverflow.com/a/23780751/2925169
    Object.values = Object.values || function (o: any) {
        return Object.keys(o).map(function (k) {
            return o[k];
        });
    };


    if (typeof (String.prototype.trim) === "undefined") {
        String.prototype.trim = function () {
            return String(this).replace(/^\s+|\s+$/g, '');
        };
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
    if (!String.prototype.startsWith) {
        Object.defineProperty(String.prototype, 'startsWith', {
            value: function (search: any, rawPos: number) {
                let pos = rawPos > 0 ? rawPos | 0 : 0;
                return this.substring(pos, pos + search.length) === search;
            }
        });
    }


    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith#polyfill
    if (!String.prototype.endsWith) {
        String.prototype.endsWith = function (search, this_len) {
            if (this_len === undefined || this_len > this.length) {
                this_len = this.length;
            }
            return this.substring(this_len - search.length, this_len) === search;
        };
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#polyfill
    if (!String.prototype.includes) {
        String.prototype.includes = function (search: any, start) {
            if (search instanceof RegExp) {
                throw TypeError('first argument must not be a RegExp');
            }
            if (start === undefined) {
                start = 0;
            }
            return this.indexOf(search, start) !== -1;
        };
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat#polyfill
    // with modifications
    if (!String.prototype.repeat) {
        String.prototype.repeat = function (count) {
            if (this == null) {
                throw new TypeError("can't convert " + this + " to object");
            }

            let str = '' + this;
            // To convert string to integer.
            count = +count;
            // Check NaN
            if (!count) {
                count = 0;
            }

            if (count < 0) {
                throw new RangeError('repeat count must be non-negative');
            }

            if (count === Infinity) {
                throw new RangeError('repeat count must be less than infinity');
            }

            count = Math.floor(count);
            if (str.length === 0 || count === 0) {
                return '';
            }

            // Ensuring count is a 31-bit integer allows us to heavily optimize the
            // main part. But anyway, most current (August 2014) browsers can't handle
            // strings 1 << 28 chars or longer, so:
            if (str.length * count >= 268435456) {
                throw new RangeError('repeat count must not overflow maximum string size');
            }

            let maxCount = str.length * count;
            count = Math.floor(Math.log(count) / Math.log(2));
            while (count) {
                str += str;
                count--;
            }
            str += str.substring(0, maxCount - str.length);
            return str;
        };
    }
}

