const findTheOldest = function (obj) {
    oldestSort = obj.sort(function (a, b) {

        if (a.hasOwnProperty(('yearOfDeath')) && b.hasOwnProperty('yearOfDeath')) {
            let lastGuy = a.yearOfDeath - a.yearOfBirth;
            let nextGuy = b.yearOfDeath - b.yearOfBirth;
            return lastGuy > nextGuy ? -1 : 1;
        }

        else {
            let currentYear = new Date().getFullYear()  // returns the current year
            let lastGuy = currentYear - a.yearOfBirth;
            let nextGuy = currentYear - b.yearOfBirth;
            return lastGuy > nextGuy ? -1 : 1;
        }
    });
    oldPerson = oldestSort[0];
    //console.log(oldPerson);
    return oldPerson;
};
//# Exercise 12 - Find the Oldest

// Given an array of objects representing people with a birth and death year, return the oldest person.

// Now that you've reached the final exercise, you should be fairly comfortable getting the information you need from test case(s). Take a look at how the array of objects is constructed in this exercise's test cases to help you write your function.

// ## Hints
//     - You should return the whole person object, but the tests mostly just check to make sure the name is correct.
// - This can be done with a couple of chained array methods, or by using`reduce`.
// - One of the tests checks for people with no death - date..use JavaScript's Date function to get their age as of today.



//const findTheOldest = require('./findTheOldest')
// describe('findTheOldest', () => {
//   test('finds the person with the greatest age!', () => {
//     const people = [
//       {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//       },
//       {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//     ]
//     expect(findTheOldest(people).name).toBe('Ray');
//   });
//   test.skip('finds the person with the greatest age if someone is still living', () => {
//     const people = [
//       {
//         name: "Carly",
//         yearOfBirth: 2018,
//       },
//       {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//     ]
//     expect(findTheOldest(people).name).toBe('Ray');
//   });
//   test.skip('finds the person with the greatest age if the OLDEST is still living', () => {
//     const people = [
//       {
//         name: "Carly",
//         yearOfBirth: 1066,
//       },
//       {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//     ]
//     expect(findTheOldest(people).name).toBe('Carly');
//   });
// });



// Do not edit below this line
module.exports = findTheOldest;