/* globals exports */
/* jshint node: true */
/* jshint eqnull: true */

/* jshint curly: false */

function zeropad(num, size) {
    "use strict";
    var sign = num >= 0 ? '' : '-';
    num = num >= 0 ? num : -num;
    // at most 10 digits
    var s = "0000000000" + num;
    return sign + s.substr(s.length - size);
}

function numsysdiv(num, base, count) {
    "use strict";
    var sign = num >= 0 ? 1 : -1;
    var part;
    var parts = [];
    num = Math.abs(Math.round(num));
    for (var i = 0; i < count; i++) {
        part = num % base;
        parts.push(part);
        num = Math.floor(num / base);
    }
    parts.push(num);
    parts.push(sign);
    return parts;
}

function formatMMSS(seconds) {
    "use strict";
    seconds = Math.round(seconds);
    var m = Math.floor(seconds / 60);
    var s = seconds - m * 60;
    if (s > 9) {
        return m + ':' + s;
    }
    else {
        return m + ':0' + s;
    }
}


function formatHHMM(total_seconds) {
    "use strict";
    var total_minutes = Math.floor(total_seconds / 60);
    var parts = numsysdiv(total_minutes, 60, 1);
    var retval = parts[1] + ':' + zeropad(parts[0], 2);
    if (parts[2] < 0) {
        return '-' + retval;
    }
    return retval;
}

function formatHHMMSS(total_seconds) {
    "use strict";
    var total_minutes = Math.floor(total_seconds / 60);
    var parts = numsysdiv(total_minutes, 60, 2);
    var ss = zeropad(parts[0], 2);
    var mm = zeropad(parts[1], 2);
    var hh = parts[2];
    var retval = hh + ':' + mm + ':' + ss;
    if (parts[3] < 0) {
        return '-' + retval;
    }
    return retval;
}

function CountdownTimer(duration, targetId) {
    "use strict";
    var that = this;
    this.start = new Date();
    this.target = document.getElementById(targetId);
    this.duration = duration;
    this.getTimeLeft = function () {
        var now = new Date();
        var tml = Math.floor((that.start - now) / 1000) + that.duration;
        return tml > 0 ? tml : 0;
    };
    this.refresh = function () {
        var timeLeft = that.getTimeLeft();
        // window.console.log(timeLeft);
        // window.alert(timeLeft);
        that.target.innerHTML = formatHHMM(timeLeft);
    };
    this.show = function () {
        that.target.removeAttribute('hidden');
        that.refresh();
    };
}

exports.zeropad = zeropad;
exports.numsysdiv = numsysdiv;
exports.formatMMSS = formatMMSS;
exports.formatHHMM = formatHHMM;
exports.formatHHMMSS = formatHHMMSS;
exports.CountdownTimer = CountdownTimer;
