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

const profile = {
    name: 'Alex',
    getName: function () { 
        return this.name 
    }
};