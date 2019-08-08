const a = 5;
console.log(a);
const b = 'Vardas';
console.log(b);
const c = true;
console.log(c);
const d = [1, 2, 18, 57];
console.log(d);
const e = null;
console.log(e);
const f = undefined;
console.log(f);

class Zmones {
    constructor (name){
        this.name = name;
    }
    sayHi(){
        console.log(`Hello, my name is ` + this.name);
    }
}
let zmogus = new Zmones('Jonas');
zmogus.sayHi();