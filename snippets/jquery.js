/* globals $ */
/* jslint strict: false */


// jQuery Flip: https://nnattawat.github.io/flip/


/* ========= AJAX ========= */

var req_data = $('#statscv-modal-form').serialize();
$.post('/eventpath/event/edit', req_data, function (resp_data) {
    window.alert(resp_data.code);
});

$.ajax({
    url: 'QH.json',
    dataType: 'json',
    success: function (resp) {
        console.log(resp);
    }
});


/* ========= keyboard binding ========= */

// example: m14-sentosa/resources/static/vocab.js
$(document).keydown(function (e) {
    // http://keycode.info/
    switch (e.which) {
        case 37: // left
            break;

        case 38: // up
            break;

        case 39: // right
            break;

        case 40: // down
            break;

        default:
            return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});



