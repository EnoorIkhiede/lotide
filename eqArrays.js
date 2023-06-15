// Function to compare two arrays for perfect match
function eqArrays(arr1, arr2) {
  // If the lengths of the arrays are different, they are not a perfect match
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Iterate over the elements of the arrays
  for (let i = 0; i < arr1.length; i++) {
    // If any corresponding elements are not equal, the arrays are not a perfect match
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // All elements are equal, so the arrays are a perfect match
  return true;
}

// Test cases using assertEqual
const assertEqual = require('./assertEqual');

module.exports = eqArrays;