class Animal {
    constructor ( name, color, sound, continent ) {
        this.name = name;
        this.color = color;
        this.sound = sound;
        this.continent = continent;

        this.validation();
    }

    validation = () => {
        this.validateName();
        this.validateColor();
        this.validateSound();
        this.validateContinent();
    }

    validateName = () => {
        if ( typeof(this.name) !== 'string' ||
             this.name.length === 0 ) {
            this.name = 'A';
        }
    }

    validateColor = () => {
        switch ( this.color ) {
            case 'while':
            case 'black':
            case 'blue':
            case 'red':
            case 'green':
                break;
        
            default:
                this.color = 'white';
                break;
        }
    }

    validateSound = () => {
        if ( typeof(this.sound) !== 'string' ) {
            this.sound = '';
        }
    }

    validateContinent = () => {
        switch ( this.continent ) {
            case 'Europe':
            case 'Asia':
            case 'Africa':
            case 'Australia':
            case 'North America':
            case 'Sounth America':
            case 'Antarctida':
                break;
        
            default:
                this.continent = 'Europe';
                break;
        }
    }
}

const suo = new Animal('Aviganis', 'juodas', 'au au', 'Europe');

const zuvis = new Animal('Karosas', 'pilkas', '', 'Europe');

const papuga = new Animal('Aga', '', '', '');

const zvirblis = new Animal('Zvirblis');

console.log( suo );
console.log( zuvis );
console.log( papuga );
console.log( zvirblis );
