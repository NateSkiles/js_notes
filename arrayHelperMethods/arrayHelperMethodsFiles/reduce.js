var numbers = [10, 20, 30];
var sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

var reduceSum = numbers.reduce(function (sum, number) {
    return sum + number;
},
    // Initial Value
    0
);

console.log(reduceSum);