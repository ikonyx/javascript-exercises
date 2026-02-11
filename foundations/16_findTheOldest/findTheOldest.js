const getAge = function (person) {
    person.yearOfDeath ??= new Date().getFullYear();  
    return person.yearOfDeath - person.yearOfBirth;
    }

const findTheOldest = function(array) {
    array.sort(function(person,nextPerson) {
    return getAge(person) > getAge(nextPerson) ? -1 : 1;
    });
        
    return array[0]
};

// Do not edit below this line
module.exports = findTheOldest;
