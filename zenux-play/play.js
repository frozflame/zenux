/* globals exports */
/* jshint node: true */
/* jshint eqnull: true */
/* jshint curly: false */

function int(val) {
    "use strict";
    return parseInt(val) || 0;
}

function clip(val, min, max) {
    "use strict";
    if (val < min) return min;
    if (val > max) return max;
    return val;
}

function leaveFullscreen() {
    "use strict";
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
}

function videoEnterFullscreen(video) {
    "use strict";
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    else if (video.msRequestFullscreen) video.msRequestFullscreen();
}

function videoToggleFullscreen(video) {
    "use strict";
    if (document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen) {
        return leaveFullscreen();
    }
    videoEnterFullscreen(video);
}

function videoTogglePause(video) {
    "use strict";
    video[video.paused ? 'play' : 'pause']();
}


function videoForward(video, seconds) {
    "use strict";
    video.currentTime += seconds;
}


function Cursor(elements) {
    "use strict";
    var that = this;
    this.idx = -1;
    this.elements = elements;
    this.seek = function (idx, inc, circular) {
        idx = idx == null ? int(that.idx) : int(idx);
        inc = inc == null ? 0 : int(inc);
        idx += inc;
        if (circular) {
            that.idx = idx % that.elements.length;
        } else {
            that.idx = clip(idx, 0, that.elements.length - 1);
        }
    };
    this.get = function () {
        return that.elements[that.idx];
    };
    return that;
}


exports.int = int;
exports.clip = clip;
exports.leaveFullscreen = leaveFullscreen;
exports.videoEnterFullscreen = videoEnterFullscreen;
exports.videoToggleFullscreen = videoToggleFullscreen;
exports.videoTogglePause = videoTogglePause;
exports.videoForward = videoForward;
exports.Cursor = Cursor;

