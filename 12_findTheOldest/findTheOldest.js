const findTheOldest = function(people) {
  let oldestAge = people.map((person, index) => {
    if (!person["yearOfDeath"]) {
      const date = new Date();
      person["yearOfDeath"] = date.getFullYear();
    }

    let age = (person["yearOfDeath"] - person["yearOfBirth"]);
    
    return age;
  }).sort((a, b) => b - a)[0];

  let oldestPerson;

  people.forEach((person) => {
    if (person["yearOfDeath"] - person["yearOfBirth"] === oldestAge) {
      oldestPerson = person;
    }
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
