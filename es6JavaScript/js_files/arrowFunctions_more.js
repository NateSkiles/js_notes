const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Goon Squad',
    teamSummary: function () {
        return this.members.map(function (member) {
            return `${member} is on team ${this.teamName}`;
        })
    }
}

console.log(team.teamSummary());

//
// 
// 
// Exercises
const fibonacci = n => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(9));

const profile = {
    name: 'Nate',
    get: function () {
        return `This profile\'s name is ${this.name}`;
    },
    set: function (name) {
        this.name = name;
    }
};

profile.set('Jake');
console.log(profile.get());