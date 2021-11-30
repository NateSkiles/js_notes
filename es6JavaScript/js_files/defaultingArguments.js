function User (id) {
    this.id = id;
}

function generateId() {
    return Math.random() * 99999;
}
// Default argument
// when no user is passed to the function it defaults to creating a new user
function createAdminUser(user = new User(generateId())) {
    user.admin = true;
}

// createAdminUser();

const userB = new User(generateId());
createAdminUser(userB);



