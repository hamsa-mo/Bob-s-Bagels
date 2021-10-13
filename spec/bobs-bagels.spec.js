const assertEquals = require('../test-frameworks');
const Bagel = require('../src/bobs-bagels');

let input;
let output;
let result;

// Test 1 //

let cheese = new Bagel('cheese');


input = 'cheese';
output = 'cheese';
result = cheese.name;

console.log(assertEquals(output, result));

//Test 2//


let plain = new Bagel('plain');
output = 'plain';
result = plain.name2();

console.log(assertEquals(output, result));
