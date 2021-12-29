// Create a class for a game called 'Monster' and set up some basic setup for whenever a monster is created.
// Initialize the Monster's health to 100
// The construct will be called with an 'options' object that has a name property.

class Monster {
  constructor(options) {
      this.name = options.name;
      this.health = 100;
  }
}

// Create a subclass called 'Snake'
// Add bite method, passing another snake object as an argument
// Subtract 10 from the health of the snake that is bitten
class Snake extends Monster {
    constructor(options) {
        super(options);
    }

    bite(Snake){
        Snake.health -= 10
    }
}

const snake1 = new Snake({name: 'Snake 1'})
const snake2 = new Snake({name: 'Snake 2'})

snake1.bite(snake2);
snake1.bite(snake2);

// 80
console.log(snake2.health)
