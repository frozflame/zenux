var $ = require("jquery");

$(document).ready(function () {
    "use strict";
    $(document).keydown(function (e) {
        // Esc key maps to keycode 27
        if (e.keyCode === 27) {
            e.preventDefault();
            document.location.hash = '#avatarp';
        }
    });
});

/*
*   Javascript Char Codes (Key Codes)
*   https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
*
*/
