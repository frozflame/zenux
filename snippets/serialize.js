
function collect(selectors) {
    "use strict";
    return selectors.map(function (sel) {
        return $(sel).toArray().map(function (tag) {
            return tag.value;
        });
    });
}

window.console.log(JSON.stringify(collect(['input'])));
