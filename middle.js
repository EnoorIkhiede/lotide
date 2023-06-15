// Function to compare two arrays for perfect match
const eqArrays = require('./eqArrays');

// Function to compare two arrays and log appropriate message
const assertArraysEqual = require('./assertArraysEqual');

// Function to return the middle-most element(s) of an array
function middle(array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2);
  const middleElements = [];

  if (length <= 2) {
    return middleElements;
  }

  if (length % 2 === 1) {
    // Odd number of elements, return single middle element
    middleElements.push(array[middleIndex]);
  } else {
    // Even number of elements, return two middle elements
    middleElements.push(array[middleIndex - 1], array[middleIndex]);
  }

  return middleElements;
}

module.exports = middle;