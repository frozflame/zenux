
function pathOf(node) {
    "use strict";
    var path = [];
    var parent;
    while (!node.id) {
        parent = node.parentNode;
        path.push(Array.prototype.slice.call(parent.childNodes).indexOf(node));
        node = parent;
    }
    path.push(node.id);
    return path.reverse();
}

function getNodeByPath(path) {
    "use strict";
    var node = document.getElementById(path[0]);
    for (var i = 1; i < path.length; i++) {
        node = node.childNodes[path[i]];
    }
    return node;
}

function getSelectionInfo() {
    "use strict";
    var range = window.getSelection().getRangeAt(0);
    var rv = {
        'startOffset': range.startOffset,
        'startPath': pathOf(range.startContainer),
        'endOffset': range.endOffset,
        'endPath': pathOf(range.endContainer),
        'rootId': pathOf(range.commonAncestorContainer)[0],
    };
    range.collapse();
    return rv;
}

function createMark(){
    "use strict";
    var node = document.createElement("mark");
    node.setAttribute('class', 'highlight');
    return node;
}

function textNodesUnder(el) {
    "use strict";
    var all = [], walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    var n = walk.nextNode();
    while (n) {
        all.push(n);
        n = walk.nextNode();
    }
    return all;
}

function withinHighlightMark(textNode) {
    "use strict";
    var parent = textNode.parentNode;
    return parent.tagName === 'MARK' && parent.classList.contains('highlight');
}

function full_highlight(textNode) {
    "use strict";
    if (withinHighlightMark(textNode)) {
        return;
    }
    var markNode = createMark();
    markNode.append(textNode.textContent);
    textNode.replaceWith(markNode);
}

function partial_highlight(textNode, startOffset, endOffset) {
    "use strict";
    if (withinHighlightMark(textNode)) {
        return;
    }
    var range = document.createRange();
    endOffset = endOffset || textNode.length;
    range.setStart(textNode, startOffset);
    range.setEnd(textNode, endOffset);
    // window.tn = textNode;
    range.surroundContents(createMark());
}

function highlight(info) {
    "use strict";
    var startNode = getNodeByPath(info.startPath);
    var endNode = getNodeByPath(info.endPath);
    if (startNode === endNode) {
        partial_highlight(endNode, info.startOffset, info.endOffset);
        return;
    }

    var textNodes = textNodesUnder(document.getElementById(info.rootId));
    var startIndex = textNodes.indexOf(startNode);
    var endIndex = textNodes.indexOf(endNode);

    textNodes.slice(startIndex + 1, endIndex).forEach(function (tnode) {
        full_highlight(tnode);
    });

    partial_highlight(startNode, info.startOffset);
    partial_highlight(endNode, 0, info.endOffset);
}

function clearHightlights(){
    "use strict";
    $('mark.highlight').toArray().forEach(function (el) {
        el.outerHTML = el.innerText;
    });
}

/* globals exports */
exports.pathOf = pathOf;
exports.getNodeByPath = getNodeByPath;
exports.getSelectionInfo = getSelectionInfo;
exports.createMark = createMark;
exports.textNodesUnder = textNodesUnder;
exports.withinHighlightMark = withinHighlightMark;
exports.full_highlight = full_highlight;
exports.partial_highlight = partial_highlight;
exports.highlight = highlight;
exports.clearHightlights = clearHightlights;

