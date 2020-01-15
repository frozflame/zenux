/* globals exports */
/* globals require */
/* jshint node: true */
/* jshint eqnull: true */

/* jshint curly: false */

var $ = require('jquery');


function bodyToDiv(html){
    "use strict";
    var bodyContent = /<body[^>]*>([\s\S]*?)<\/body>/im.exec(html)[1];
    var div = document.createElement('div');
    div.innerHTML = bodyContent;
    return div;
}


function HTMLEscaper() {
    "use strict";
    var that = this;
    that.textarea = document.createElement('textarea');
    that.escape = function (html) {
        if (typeof html !== "string") {
            html = html.outerHTML;
        }
        that.textarea.textContent = html;
        return that.textarea.innerHTML;
    };
    that.unescape = function (html) {
        that.textarea.innerHTML = html;
        return that.textarea.textContent;
    };
}


function createElement(name, attrs, children) {
    "use strict";
    var elem = document.createElement(name);
    Object.entries(attrs).forEach(function (entry) {
        elem.setAttribute(entry[0], entry[1]);
    });
    children.forEach(function (child) {
        elem.appendChild(child);
    });
    return elem;
}


function urlToElement(url, urlbase) {
    "use strict";
    url = new URL(url, urlbase || window.location.href);
    if (/.*\.js$/.test(url.pathname)) {
        return createElement('script', {src: url.href, type: 'text/javascript'}, []);
    }
    if (/.*\.css$/.test(url.pathname)) {
        return createElement('link', {href: url.href, rel: 'stylesheet', type: 'text/css'}, []);
    }
    if (/.*\.(jpe?g|png|bmp|gif|tiff?)$/.test(url.pathname)) {
        return createElement('img', {src: url.href}, []);
    }
    return createElement('a', {href: url.href}, []);
}


function pageToElements(html, urlbase, selector, attrname) {
    "use strict";
    var anchors = $(html).find(selector || 'a').toArray();
    return anchors.map(function (anc) {
        // Notice: anchor.href is different from anchor.getAttribute('href')
        return urlToElement(
            anc.getAttribute(attrname || 'href'), urlbase);
    });
}


exports.bodyToDiv = bodyToDiv;
exports.HTMLEscaper = HTMLEscaper;
exports.createElement = createElement;
exports.urlToElement = urlToElement;
exports.pageToElements = pageToElements;
exports.$ = $;
