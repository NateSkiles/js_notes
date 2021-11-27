function findWhere(array, criteria) {
    return array.find(function (element) {
        var property = Object.keys(criteria)[0];

        return element[property] === criteria[property];
    })
}

var ladders = [
    { id: 1, height: 12 },
    { id: 2, height: 6 },
    { id: 3, height: 18 },
]

var criteria = { height: 18 };

console.log(findWhere(ladders, criteria));