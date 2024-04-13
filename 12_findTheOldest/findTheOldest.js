const findTheOldest = function(array) {
    const d = new Date();
    const currentYear = d.getFullYear();
    let highestAge = 0;
    let oldestPerson = {};
    for (let person of array) {
        if (!person.yearOfDeath) {
            person.yearOfDeath = currentYear;
        };
        if ((person.yearOfDeath - person.yearOfBirth) >= highestAge) {
            highestAge = (person.yearOfDeath - person.yearOfBirth);
            oldestPerson = person;
        };
    };
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
