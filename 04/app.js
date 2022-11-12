const years = [1980, 1934, 2002, 2019];
let today = new Date();

const pastYears = years.map(function(element) {
    return today.getFullYear() - element;
});

console.log(pastYears);
