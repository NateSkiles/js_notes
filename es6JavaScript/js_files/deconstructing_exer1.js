const profile = {
    title: 'Engineer',
    department: 'Engineering'
};

// Shorten the function to one line with destructuring!!
//   function isEngineer(profile) {
//     var title = profile.title;
//     var department = profile.department;
//     return title === 'Engineer' && department === 'Engineering';
//   };

function isEngineer({ title, department }) {
    return title === 'Engineer' && department === 'Engineering';
};

console.log(isEngineer(profile))