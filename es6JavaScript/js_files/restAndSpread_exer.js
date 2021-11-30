// function product(a, b, c, d, e) {
//     var numbers = [a, b, c, d, e];

//     return numbers.reduce(function (acc, number) {
//         return acc * number;
//     }, 1)
// }

function product(...nums) {
    var numbers = [...nums];

    return numbers.reduce((acc, number) => acc * number, 1)
}

//
//
// 
// function join(array1, array2) {
//     return array1.concat(array2);
// }

function join(array1, array2) {
    return [...array1, ...array2]
}

console.log(join(['test', '1234',], ['123', 'asdf']))

// 
// 
// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
// }

function unshift(array, ...letters) {
    return [...letters, ...array];
}