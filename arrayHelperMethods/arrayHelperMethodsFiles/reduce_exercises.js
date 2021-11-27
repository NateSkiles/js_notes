var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance = trips.reduce(function (acc, trip) {
    return acc + trip.distance;
}, 0);

console.log(totalDistance);

// 
// 
//

// var desks = [
//     { type: 'sitting' },
//     { type: 'standing' },
//     { type: 'sitting' },
//     { type: 'sitting' },
//     { type: 'standing' }
// ];

// console.log(deskTypes);

// 
// 
//

var numbers = [1, 1, 1, 2, 3, 4];

function unique(array) {
    return array.reduce(function (acc, element) {
        var existingElement = acc.find(function (target) {
            return target === element;
        });

        if (!existingElement) {
            acc.push(element);
        }

        return acc;
    }, []);
}

console.log(unique(numbers));