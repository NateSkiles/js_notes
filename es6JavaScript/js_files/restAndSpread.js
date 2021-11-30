// Rest Operator
// Gathers all of the arguments up
function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0)
}

console.log(addNumbers(1, 2, 3, 4, 5, 6, 6, 7, 3, 546, 1234));

// Spread Operator
// Spreads out items from an array
const goodTeams = ['Cowboys'];
const badTeams = ['Eagles', 'WFT', 'Giants'];

// const nfcEast = goodTeams.concat(badTeams);
const nfcEast = [...goodTeams, ...badTeams];
console.log(nfcEast);

const otherBadTeams = ['Jaguars', 'Texans', ...badTeams]
console.log(otherBadTeams);

//
//
// Porque no los dos?
function validateShoppingList(...items) {
    if (items.indexOf('oat milk') < 0) {
        return ['oat milk', ...items];
    }
    return items;
}

console.log(validateShoppingList('oranges', 'turkey', 'yogurt'));



function FirstFactorial(num) { 
   
  }
     
  // keep this function call here 
  console.log(FirstFactorial(readline()));