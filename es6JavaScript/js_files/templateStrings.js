// ES5
function getMessage() {
    const year = new Date().getFullYear();

    return "The year is " + year;
}

console.log(getMessage());

//
// 
// 
// ES6 - Template strings/string interpolation
function getMessageES6() {

    return `The year is ${new Date().getFullYear() + 1}`;
}

console.log(getMessageES6());