var users = [
    { name: 'Nate' },
    { name: 'Alex' },
    { name: 'Jake' }
];

// var user;
//
// for (let i = 0; i < users.length; i++) {
//     if (users[i].name === 'Nate') {
//         user = users[i];
//         // Once the name is found, break out of the loop
//         break;
//     }
// }
// console.log(user);

//
//
//
console.log(users.find(function (user) {
    return user.name === 'Nate';
}))