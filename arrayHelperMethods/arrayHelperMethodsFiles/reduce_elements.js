let primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' },
];

let colors = primaryColors.reduce(function (accumulator, primaryColor) {
    accumulator.push(primaryColor.color);

    return accumulator;
}, []);

console.log(colors);