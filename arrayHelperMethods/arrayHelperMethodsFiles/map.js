// let numbers = [1,2,3,4,]
// let doubledNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     doubledNumbers.push(numbers[i] * 2);
// }

// let doubled = numbers.map(function(number) {
//     return number * 2;
// });

// console.log(doubled);
// console.log(doubledNumbers);

// let cars = [
//     {model: 'Civic', price: 20000},
//     {model: 'Tundra', price: 50000}
// ];

// let prices = cars.map(function(car) {
//     return car.price;
// })

// console.log(prices);

//
//
//
// Implement a 'pluck' function. Pluck should accept an array and a string representing a property name 
//  and return an array containing that property from each object.
var paints = [{ color: 'blue' }, { color: 'red' }, { color: 'green' }]
function pluck(array, property) {
    return array.map(function (element) {
        return element[property];
    });
}
console.log(pluck(paints, 'color'));