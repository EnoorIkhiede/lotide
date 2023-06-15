// Function to compare two arrays for perfect match
const eqArrays = require('./eqArrays');

// Function to compare two arrays and log appropriate message
function assertArraysEqual(arr1, arr2) {
  const equal = eqArrays(arr1, arr2);
  if (equal) {
    console.log(`✅✅✅ Assertion Passed: ${arr1}  ===  ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

module.exports = assertArraysEqual;

