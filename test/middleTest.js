const assert = require('chai').assert;
const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// Test assertions for the middle function
// assertArraysEqual(middle([1]), []); // Empty array, as there is no middle element
// assertArraysEqual(middle([1, 2]), []); // Empty array, as there is no middle element
// assertArraysEqual(middle([1, 2, 3]), [2]); // Single middle element: [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Single middle element: [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Two middle elements: [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 8]); // Two middle elements: [3, 4]

describe("#middle", () => {
  it("returns 1 for []", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [1, 2] for []", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3, 8] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 8]);
  });
});

