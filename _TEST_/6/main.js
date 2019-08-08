'use strict'

function arDalinasi(x) {
    if (x%3 === 0 && x%7 === 0 && typeof(x) === 'number'){
        console.log(`Skaičius dalinasi ir iš 3, ir iš 7`);
        
    }else {
        console.log(`Skaičius nesidalina iš 3 arba iš 7 arba tai nėra sveikasis skaičius`);
        
    }
}

const skaiciai = {
    pirmas: '5',
    antras: 21,
    trecias: '21'
};


arDalinasi(5);
arDalinasi(42);
arDalinasi(42.42);
arDalinasi('5');
arDalinasi('21');
arDalinasi(Infinity);
arDalinasi([21, 42, 542, 8]);
arDalinasi(skaiciai.pirmas);
arDalinasi(skaiciai.antras);
arDalinasi(skaiciai.trecias);
console.log(`Bandziau tikrint su isInteger() ar yra sveikasis, nepavyko priverst veikt.`);
