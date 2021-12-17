// Create a function that will return a new array with all values inside of it doubled.
// DO NOT USE ARRAY HELPERS.
// Use array destructuring, recursion, and the rest/spread operators.

const numbers = [1, 2, 3];

function double([first, ...rest]) {
    if (rest.length === 0) {
        return [first * 2];
    } else {
        return [first * 2, ...double(rest)];
    }
};

console.log(double(numbers));