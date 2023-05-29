// FUNCTION IMPLEMENTATION using literals
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const stringCount = {};

  for (var i = 0; i < sentence.length; i++ ) {
    const letter = sentence[i];
    if (letter !== " ") {
      if (stringCount[letter]){
        stringCount[letter]++;
      } else {
        stringCount[letter] = 1;
      }
    }
  }

  return stringCount;
};

const result = countLetters("lighthouse in the house");
console.log(result);

const result1 = countLetters("lighthouse in the house");



assertEqual(result1["l"], 2);
assertEqual(result1["i"], undefined);
assertEqual(result1["h"], 4);
assertEqual(result1["o"], 2);
assertEqual(result1["e"], 2);
assertEqual(result1["g"], 2);
assertEqual(result1["t"], 2);

// const countLetters = "LHL"
//   for (const value of countLetters) {
//     console.log(value);
//   }
