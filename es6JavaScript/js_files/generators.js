// function *shopping() {
//     const stuffFromStore = yield 'cash';
//     return stuffFromStore;
// }

// const gen = shopping();
// console.log(gen.next());
// // { value: 'cash', done: false }
// console.log(gen.next('groceries'));
// // { value: 'groceries', done: true }

function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const myColors = [];
for (let color of colors()) {
    myColors.push(color);
}

for (const color of myColors) {
    console.log(color);
}

const color = colors();

console.log(color.next()); // red - false
console.log(color.next().value); // blue
console.log(color.next().done); // false
console.log(color.next()); // undefined - true
console.log(color.return('foo')); // foo - true
// console.log(color.throw(new Error('Something went wrong!')));