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
    that.unescape = function (html) {
        that.textarea.innerHTML = html;
        return that.textarea.textContent;
    };
}


var _htmlEscaper = new HTMLEscaper();


function createElement(name, attrs, children) {
    var elem = document.createElement(name);
    Object.entries(attrs).forEach(function (entry) {
        elem.setAttribute(entry[0], entry[1]);
    });
    children.forEach(function (child) {
        elem.appendChild(child);
    });
}

function urlToElement(url) {
    // TODO: parse url i.s.o. regex
    var anchor = document.createElement('a');
    anchor.href = url;
    if (/.*\.js$/.test(anchor.pathname)) {
        return createElement('script', {src: url, type: 'text/javascript'}, []);
    }
    if (/.*\.css$/.test(anchor.pathname)) {
        return createElement('link', {href: url, rel: 'stylesheet', type: 'text/css'}, []);
    }
}


exports.HTMLEscaper = HTMLEscaper;
exports.urlToElement = urlToElement;
