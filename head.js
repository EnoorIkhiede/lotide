const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function head(array) {
  if (array.length === 0) {
    return undefined; // Return undefined for an empty array
  }
  return array[0]; // Return the first element of the array
}


// TEST CODE
assertEqual(head([5, 6, 7]), 5); // Array with numbers
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([42]), undefined);
assertEqual(head([]), undefined); 
