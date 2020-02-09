
Array.prototype.allValuesSame = function() {
    "use strict";
    for(var i = 1; i < this.length; i++)
    {
        if(this[i] !== this[0]){
            return false;
        }
    }
    return true;
};

console.log([1, 1].allValuesSame());
console.log([1, 2].allValuesSame());
