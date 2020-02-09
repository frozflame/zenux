
// https://stackoverflow.com/questions/2496710/writing-files-in-node-js
// https://stackoverflow.com/a/2497040/2925169

var fs = require('fs');
fs.writeFile("/tmp/test", "Hey there!", function(err) {
    "use strict";
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});