const assert = require('chai').assert;
const tail = require('../tail');
// const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
// assertEqual(words.length, 3); 

describe("#tail", () => {
  it("returns 3 for words length", () => {
    assert.strictEqual(words.length, 3);
  });
});

