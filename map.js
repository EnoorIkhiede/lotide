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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];

  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    results.push(callback(item));
    console.log('---');
  }
  
  return results;
}
 const result = map(words, function(word) {
   return word[0];
 });

 console.log(result);


//Testing our code 
assertArraysEqual(['g'], result[0]);
assertArraysEqual(['o'], result[1]);
assertArraysEqual(['t'], result[2]);
assertArraysEqual(['m'], result[3]);
assertArraysEqual(['m'], result[4]);