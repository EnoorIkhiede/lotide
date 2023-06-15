// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual');

function head(array) {
  if (array.length === 0) {
    return undefined; // Return undefined for an empty array
  }
  return array[0]; // Return the first element of the array
}

module.exports = head;
