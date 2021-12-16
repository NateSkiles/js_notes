// Deconstructing arrays and objects at the same time
const companies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Meta', location: 'Menlo Park' },
    { name: 'Nate', location: 'Portland' },
];

const [{ location }] = companies;

console.log(location);

// Deconstruct object with an array as a value pair
// Advance example:
const myLocation = {
    locations: ['Home', 'Grocery Store', 'Coffee Shop']
};
// Look in the object myLocation and look for the property locations,
// If it exists, return the first element of the array.
const { locations: [ currentLocation ] } = myLocation;

console.log(currentLocation);