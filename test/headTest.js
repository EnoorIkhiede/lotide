const head = require('../head');
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual(head([5, 6, 7]), 5); // Array with numbers
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([42]), undefined);
assertEqual(head([]), undefined); 
