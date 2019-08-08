'use strict'

function gyvunas (pavadinimas, spalva, garsas, zemynas){
    this.pavadinimas = pavadinimas;
    this.spalva = spalva;
    this.garsas = garsas;
    this.zemynas = zemynas;
}
var petras = new gyvunas ('zirafa', 'raudona', 'bhehehe', 'Afrika');
var katazina = new gyvunas ('lape', 'zalia', 'kekekee', 'Europa');

gyvunas.aprasas = function () {
    console.log ('gyvuno aprasas...')
}

console.log(petras.aprasas);