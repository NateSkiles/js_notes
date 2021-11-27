// function Car(model) {
//     this.model = model;
// }

// var cars = [
//     new Car('Explorer'),
//     new Car('Focus'),
//     new Car('Civic'),
//     new Car('Camry')
// ]

// var focusCar = cars.find(function(car) {
//     return car.model === 'Focus';
// })

// console.log(focusCar);

//
//
// 
var posts = [
    { id: 1, title: 'new post' },
    { id: 2, title: 'old post' },
    { id: 3, title: 'older post' }
]

var comment = { postId: 1, body: 'Hahahahaha' };

function postForComment(posts, comment) {
    return posts.find(function(post) {
        return post.id === comment.postId;
    })
}

console.log(postForComment(posts, comment))