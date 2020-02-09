
setTimeout(function(){
   "use strict";
   // forced reload is deprecated
   // location.reload(true) => location.reload()
   window.location.reload();
}, 5000);



// Navigate Hash Without Affecting History: https://luxiyalu.com/navigate-hash-without-affecting-history/
// SOquestion: https://stackoverflow.com/a/14690177
// hash navigation without history
location.replace("#hash");
// for browsers like iOS Chrome
history.replaceState(undefined, undefined, "#hash");


