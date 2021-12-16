// ES5

var savedFile = {
    extension: 'jpeg',
    name: 'repost',
    size: 13370
};

// function fileSummary(file) {
//     return `The file ${file.name}.${file.extension} has a size of ${file.size}`
// };

function fileSummary({ extension, name, size }) {
    return `The file '${name}.${extension}' has a size of ${size} kb.`
}

console.log(fileSummary(savedFile));