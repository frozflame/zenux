/* globals exports */
/* jshint node: true */
/* jshint eqnull: true */

/* jshint curly: false */

function HTMLEscaper() {
    var that = this;
    that.textarea = document.createElement('textarea');
    that.escape = function (html) {
        that.textarea.textContent = html;
        return that.textarea.innerHTML;
    };
    that.unescape = function(html) {
        that.textarea.innerHTML = html;
        return that.textarea.textContent;
    };
}


exports.HTMLEscaper = HTMLEscaper;