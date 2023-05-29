// FUNCTION IMPLEMENTATION using literals
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(bestTVShowsByGenre, title) {
  
  for(const show in bestTVShowsByGenre){
    if (bestTVShowsByGenre.hasOwnProperty(show)){
      if (bestTVShowsByGenre[show] === title) {
        return show;
      }
    }
  }
  return undefined;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const title = "Brooklyn Nine-Nine"
const result = findKeyByValue(bestTVShowsByGenre, title);
console.log(result);



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "sci_fi");