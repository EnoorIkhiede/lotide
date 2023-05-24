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

// Function to flatten an array with one level of nesting
function flatten(arr) {
  // Create an empty array to store the flattened elements
  const flattenedArray = [];

  // Iterate over the elements of the input array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is an array
    if (Array.isArray(arr[i])) {
      // If it's an array, iterate over its elements and push them to the flattenedArray
      for (let j = 0; j < arr[i].length; j++) {
        flattenedArray.push(arr[i][j]);
      }
    } else {
      // If it's not an array, push it directly to the flattenedArray
      flattenedArray.push(arr[i]);
    }
  }

  // Return the flattenedArray
  return flattenedArray;
}

// Test case
console.log(flatten([1, 2, [3, 4], 5, [6]])); // Output: [1, 2, 3, 4, 5, 6]
