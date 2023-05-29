// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const equal = eqObjects(arr1, arr2);
  if (equal) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};