"use strict";

class BlackJack {
    constructor (target){
        this.target = document.querySelector(target);
        this.html = '';
        this.cards = [{name: '2', value: 2}, 
            {name: '3', value: 3},
            {name: '4', value: 4},
            {name: '5', value: 5},
            {name: '6', value: 6}, 
            {name: '7', value: 7}, 
            {name: '8', value: 8}, 
            {name: '9', value: 9}, 
            {name: '10', value: 10}, 
            {name: 'Jack', value: 10},
            {name: 'Queen', value: 10}, 
            {name: 'King', value: 10}, 
            {name: 'Ace', value: 11}    /* Reikšmės 1 daryti nėra prasmės šitoje užduotyje, nes yra tik vienas tūzas*/];
        this.init();
    }
init = () => {
    for (let i=0; i<this.cards.length; i++){
        for (let j=i+1; j<this.cards.length; j++){
            if((this.cards[i].value+this.cards[j].value == 21 )){
            this.html += `<li> ${this.cards[i].name} ${this.cards[j].name}   Sveikiname, Jūs laimėjote </li>`;
            }
        } 
    }
    document.getElementById('cards').innerHTML = this.html;
    }
}
export default BlackJack;