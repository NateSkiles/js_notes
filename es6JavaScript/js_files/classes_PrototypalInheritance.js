// ES5 w/constructor function and Prototypal Inheritance
function Car(options) {
    this.title = options.title
};

Car.prototype.drive = function () {
    return `${this.title} goes 'vroooom'`;
};

function Toyota(options) {
    Car.call(this, options);
    this.color = options.color;
};

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function () {
    return `The ${this.color} ${this.title} says: BEEP BEEP - Get out of the way mister!`
}

const car = new Toyota({ color: "Black", title: "Camry" });

console.log(car.drive());
console.log(car.honk());

