// Interpolate on creation
const myKey = 'foo';

// The square brackets [] around myKey tells JavaScript that what's inside needs to be interpolated as its value
const dynamicObject = {
    [myKey]: 'bar'
};

// Interpolate on an existing object
const myOtherKey = 'Nate';

dynamicObject[myOtherKey] =  ' the Great';



console.log(dynamicObject)