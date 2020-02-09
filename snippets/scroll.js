function scroll(){
    "use strict";
    setInterval(1000, function () {
        window.scrollBy(0, document.body.scrollHeight);
    });
}

scroll();

