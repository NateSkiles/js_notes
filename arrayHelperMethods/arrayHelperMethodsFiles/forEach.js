var colors = ['red', 'blue', 'green'];

// Traditional For loop 
// for (i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// forEach method
// colors.forEach(function(color) {
//     console.log(color);
// })

// Create an array of numbers
let numbers = [1, 2, 3, 4, 5]

// Create a variable to hold sum of array
let sum = 0;

function adder(number) {
    sum += number;
}

// Loop over array, incrementing sum
//
//// numbers.forEach(function(number) {
//     sum += number;
// });
numbers.forEach(adder);

// Print sum
// console.log(sum);

//
//
//
//
var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];

var areas = [];

images.forEach(function(image) {
    areas.push(image.width * image.height)
})

console.log(areas);