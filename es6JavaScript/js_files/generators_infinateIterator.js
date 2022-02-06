function* inf() {
    let index = 0;

    while(true) {
        yield index++;
    }
}

const gen = inf();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

let n = 0;

// Count to 25 in binary
while (n < 25) {
    n++
    console.log(gen.next().value.toString(2));
}
// ...