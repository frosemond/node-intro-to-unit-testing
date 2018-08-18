// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

// test the normal case
  it(' should show fizz buzz for multiples of 3,5,15', function() {
    const normalCases = [
      {x: 15, expected: 'fizz-buzz'},
      {x: 10, expected: 'buzz'},
      {x: 6, expected: 'fizz'},
      {x: 1, expected: 1}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.x);
      expect(answer).to.equal(input.expected);
    });
  });
});
