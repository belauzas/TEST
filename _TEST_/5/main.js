'use strict'

function arDalinasi(x) {
    if (x%3 === 0 && x%7 === 0 && typeof(x) === 'number'){
        console.log(`Skaičius dalinasi ir iš 3, ir iš 7`);
        
    }else {
        console.log(`Skaičius nesidalina iš 3 arba iš 7 arba tai nėra sveikasis skaičius`);
        
    }
}