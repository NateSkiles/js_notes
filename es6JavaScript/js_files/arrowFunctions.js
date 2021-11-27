// ES5
const addA = function (a, b) {
    return a + b;
}

// 
// 
// 
// ES6
// Drop the function keyword for parenthesizes
const addB = (a, b) => {
    return a + b;
}

// Remove curly brackets and return keyword to create an Implicit return of the function.
const addC = (a, b) => a + b;

// 
// 
// 
// For functions with single arguments you can drop the parenthesis around the argument
const double = number => 2 * number;

console.log(double(16));
