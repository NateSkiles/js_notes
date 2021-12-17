// Convert the array of arrays into an array objects,
// where each object has the keys 'subject', 'time', 'teacher' 
// and assign the result to 'classesAsObject'

const classes = [
    ['Chemistry', '9AM', 'Mr. Darnick'],
    ['Physics', '10:15AM', 'Mrs. Lithun'],
    ['Math', '11:30AM', 'Mrs. Vitalis']
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return { subject, time, teacher };
});

console.log(classesAsObject)