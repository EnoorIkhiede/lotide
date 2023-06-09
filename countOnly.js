
// FUNCTION IMPLEMENTATION using literals
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const count = {};

  for (var i = 0; i < itemsToCount.length; i++) {
    const item = itemsToCount[i];
    if (allItems[item] === true) {
      if (count[item]) {
        count[item]++;
      } else {
        count[item] = 1;
      }
    }
  }

  return count;
};

const itemsToCount = ['a', 'a', 'a', 'b', 'c', 'd', 'e', 'a'];
const allItems = {
  a: true,
  b: true,
  d: false,
  f: true
};

const result = countOnly(allItems, itemsToCount);
console.log(result); 


const result1 = countOnly(allItems, itemsToCount);



assertEqual(result1["a"], 2);
assertEqual(result1["b"], undefined);
assertEqual(result1["d"], 1);
assertEqual(result1["f"], undefined);


  
