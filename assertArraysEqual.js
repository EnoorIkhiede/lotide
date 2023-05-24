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

// Function to compare two arrays and log appropriate message
function assertArraysEqual(arr1, arr2) {
  const equal = eqArrays(arr1, arr2);
  if (equal) {
    console.log(`✅✅✅ Assertion Passed: ${arr1}  ===  ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

// Example usage of assertArraysEqual
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
