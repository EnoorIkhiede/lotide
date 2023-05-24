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

// Test assertions for the middle function
assertArraysEqual(middle([1]), []); // Empty array, as there is no middle element
assertArraysEqual(middle([1, 2]), []); // Empty array, as there is no middle element
assertArraysEqual(middle([1, 2, 3]), [2]); // Single middle element: [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Single middle element: [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Two middle elements: [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 8]); // Two middle elements: [3, 4]