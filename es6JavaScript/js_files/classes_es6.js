class Car {
    constructor({ title }) {
        this.title = title;
    }
    drive() {
        return `The ${this.title} goes vroom`;
    }
}

class Toyota extends Car {
    constructor(options) {
        super(options)
        this.color = options.color;
    }

    honk() {
        return 'beep';
    }
}







const car = new Toyota({ title: 'Camry' });

console.log(car.drive());