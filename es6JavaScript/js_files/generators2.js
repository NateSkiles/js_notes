const tseWestTeam = {
    size: 3,
    department: 'cx',
    position: 'TSE',
    manager: 'Chris',
    senior: 'Jason',
    tseTeam: tseTeam
};

const tseTeam = {
    tse: 'Nate',
    tse: 'Colby',
    tse: 'Derek',
}

function* TeamIterator(team) {
    yield { position: team.position, name: team.principle };
    yield { position: team.position, name: team.senior };
    yield { position: team.position, name: team.tse };
}

const names = [];
for (const name of TeamIterator(tseTeam)) {
    names.push(name);
}

for (const name of names) {
    console.log(`Name: ${name.name} Position: ${name.position}`);
}