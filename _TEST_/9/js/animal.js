class animal {
    constructor ( name, color, sound, continent ) {
        this.name = name;
        this.color = color;
        this.sound = sound;
        this.continent = continent;
    }
    gyvunas= () => {
        return `Toks gyvynas ${this.name}!`;
    }
}

let begemotas = new animal('Begea', 'Pilkos', 'Muuuuk', 'Afrika');

console.log(begemotas);
console.log(begemotas,gyvunas());