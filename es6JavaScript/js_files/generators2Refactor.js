const teamMembers = {
    west: 'Nate',
    central: 'Kyle',
    east: 'Les',
    // Defines how to iterate over the object
    // Use generator to return each name from teamMembers object
    [Symbol.iterator]: function* () {
        yield this.west;
        yield this.central;
        yield this.east;
    }
}

const tseTeam = {
    teamMembers,
    size: 3,
    department: 'cx',
    position: 'TSE',
    manager: 'Terry',
    senior: 'Luke',
    [Symbol.iterator]: function* () {
        yield this.manager;
        yield this.senior;
        // Generator Delegation
        yield* this.teamMembers;
    }
};

//
const names = [];
for (const name of tseTeam) {
    names.push(name);
}

console.log(names)