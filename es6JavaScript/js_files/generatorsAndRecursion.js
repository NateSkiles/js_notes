class Comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    // Object literal syntax
    // star indicates a generator function - Symbol.iterator key describes how to iterate over object
    // created tree data structure
    *[Symbol.iterator]() {
        yield this.content;
        for (const child of this.children) {
            yield* child;
        }
    }
}


// Comment Trees
const children2 = [
    new Comment('ugly comment', []),
    new Comment('funny comment', []),
    new Comment('hello world', []),
];

const children = [
    new Comment('good comment', children2),
    new Comment('bad comment', []),
    new Comment('meh', []),
];


const tree = new Comment('Great post!', children);

// console.log(tree);

const values = [];
for (const value of tree) {
    values.push(value);
}

console.log(values)