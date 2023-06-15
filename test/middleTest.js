const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Test assertions for the middle function
assertArraysEqual(middle([1]), []); // Empty array, as there is no middle element
assertArraysEqual(middle([1, 2]), []); // Empty array, as there is no middle element
assertArraysEqual(middle([1, 2, 3]), [2]); // Single middle element: [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Single middle element: [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Two middle elements: [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 8]); // Two middle elements: [3, 4]