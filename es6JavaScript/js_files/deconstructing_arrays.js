const companies = [
    'Meta',
    'Google',
    'Kustomer'
];

const [ name1, name2, ...rest ] = companies

console.log(name1);
console.log(name2);
console.log(rest);