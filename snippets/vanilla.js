/* AJAX */
var xhr = new XMLHttpRequest();

var getFormData = function (elements) {
    "use strict";
    var formdata = new FormData();
    for (var i = 0; i < elements.length; i++) {
        var elem = elements[i];
        formdata.append(elem.name, elem.value);
    }
    return formdata;
};

xhr.onreadystatechange = function () {
    "use strict";
    // readyState 4 means the request is done.
    // status 200 is a successful return.
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            // parse json
            var respjson = JSON.parse(xhr.responseText);
            console.log(respjson.message);
        } else {
            console.log('Error: ' + xhr.status); // An error occurred during the request.
        }
    }
};

document.getElementById('the-button').onclick = function () {
    "use strict";
    xhr.open('GET', 'send-ajax-data.php');
    xhr.send(getFormData(document.getElementsByTagName('input')));
};

