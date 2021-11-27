let names = [
    'Nate',
    'Alice',
    'Mathew',
    'Joe',
    'Bo'
];

let fourCharactersAll = names.every(function(name) {
    return name.length >= 4;
})

let fourCharactersSome = names.some(function(name) {
    return name.length >= 4;
})

console.log(fourCharactersAll);
console.log(fourCharactersSome);