const teamMembers = {
    west: 'Nate',
    central: 'Kyle',
    east: 'Les',
}

const tseTeam = {
    teamMembers,
    size: 3,
    department: 'cx',
    position: 'TSE',
    manager: 'Terry',
    senior: 'Luke'
};

// Generator Delegation
// Iterate through the team object - returning names of team members
function* TeamIterator(team) {
    yield  team.manager;
    yield team.senior;
    const testingTeamGenerator = tseTeamIterator(team.teamMembers);
    // yield star indicates that inside a yield statement, might be yield statements to check for.
    yield* testingTeamGenerator;
}

function* tseTeamIterator(team) {
    yield team.west;
    yield team.central;
    yield team.east;
}

//
const names = [];
for (const name of TeamIterator(tseTeam)) {
    names.push(name);
}

console.log(names)

for (const name of names) {
    console.log(`Name: ${name}`);
}
