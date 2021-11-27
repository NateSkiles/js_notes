let products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 5 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'cucumber', type: 'vegetable', quantity: 3, price: 5 },
    { name: 'blueberry', type: 'fruit', quantity: 8, price: 6 },
    { name: 'carrot', type: 'vegetable', quantity: 3, price: 4 },
    { name: 'tomato', type: 'vegetable', quantity: 15, price: 3 }
]

let filteredProducts = [];

for (i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}

// console.log(filteredProducts);

// console.log(products.filter(function (product) {
//     return product.type === 'vegetable';
// }))

//
//
//
// Type is vegetable, quantity is greater time, price is less than 10
let test = products.filter(function(product) {
    return product.type === 'vegetable'
    && product.quantity > 0
    && product.price < 10
});

console.log(test);