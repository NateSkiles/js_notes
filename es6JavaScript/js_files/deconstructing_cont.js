// ES5

var savedFile = {
    extension: 'jpeg',
    name: 'repost',
    size: 13370
};

function fileSummary(file) {
    return `The file ${file.name}.${file.extension} has a size of ${file.size}`
};

console.log(fileSummary(savedFile));