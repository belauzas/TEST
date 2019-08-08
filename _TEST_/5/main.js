"use strict";



function dalyba(  ) {
    var x=21;
    var a = 3;
    var b = 7;
  
    var pirmas = x % a;
    var antras = x % b;
    var liekana= pirmas*antras
    
         if (liekana === 0 ){

            document.getElementById("dalyba").innerHTML = liekana;
        }
       
    }