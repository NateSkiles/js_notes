// ES5
// var expense = {
//     type: 'meal',
//     amount: 50
// };

// var type = expense.type;
// var amount = expense.amount

// ES6 w/deconstructing
let expense = {
    type: 'meal',
    amount: 50.00
};

// const { type } = expense;
// const { amount } = expense;

// Combine deconstructed properties in a single line and separate them with a comma
const { type, amount } = expense;


console.log(`Expense type: ${type} \nExpense amount: \$${amount}`);