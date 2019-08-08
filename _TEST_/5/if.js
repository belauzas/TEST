'use strict'
var x = 27;
var result = undefined;
if ( Number.isInteger(x) && x % 3 === 0 || x % 7 === 0){
    // console.log(true);
    result = true;
}
    else{
        // console.log(false);
        result = false;
    }
console.log(result);