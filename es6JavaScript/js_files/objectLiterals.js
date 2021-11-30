function createBookShop(inventory) {
    return {
        // When you have a key and value with identical names, you can condense the statement down to just the value.
        // inventory: inventory,
        inventory,
        inventoryValue() {
            return this.inventory.reduce((sum, book) => sum + book.price, 0)
        },

        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price
        }
    };
}

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Eloquent JavaScript', price: 15 }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));
