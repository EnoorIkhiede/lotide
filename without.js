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

// Function to return a new array with elements from source that are not in itemsToRemove
function without(source, itemsToRemove) {
  // Create a new array to store the elements to keep
  let filteredArray = [];

  // Iterate over the source array
  for (let i = 0; i < source.length; i++) {
    // Check if the current element is present in itemsToRemove
    if (!itemsToRemove.includes(source[i])) {
      // If not present, add it to the filteredArray
      filteredArray.push(source[i]);
    }
  }

  // Return the filteredArray
  return filteredArray;
}

// Test cases
const words = ["hello", "world", "lighthouse"];
const withoutResult = without(words, ["lighthouse"]);

// Test if the original array was not altered by the without function
assertArraysEqual(words, ["hello", "dance", "lighthouse"]);

// Additional test cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);