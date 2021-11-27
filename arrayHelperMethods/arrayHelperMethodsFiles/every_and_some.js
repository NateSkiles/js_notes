var computers = [
    { name: 'Apple', ram: 12},
    { name: 'Compaq', ram: 8},
    { name: 'Gateway', ram: 6}
]

// var allComputersCanRunProgram = true;
// var onlySomeComputersCanRunProgram = false;

// for (let i = 0; i < computers.length; i++) {
//     var computer = computers[i];

//     if (computer.ram < 8) {
//         allComputersCanRunProgram = false;
//     } else {
//         onlySomeComputersCanRunProgram = true;
//     }
// }

// console.log(allComputersCanRunProgram);
// console.log(onlySomeComputersCanRunProgram);

//
// 
// 
let every = computers.every(function(computer) {
    return computer.ram > 8;
})

let some = computers.some(function(computer) {
    return computer.ram > 8;
})

console.log(every, some);