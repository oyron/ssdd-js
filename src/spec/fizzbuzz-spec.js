'use strict';

let fizzBuzz = require('../lib/fizzbuzz.js');

describe("fizzBuzz", function() {
    it("should return 1 on input 1", function() {
        expect(fizzBuzz(1)).toEqual(1);
    });

    it("should return 2 on input 2", function() {
        expect(fizzBuzz(2)).toEqual(2);
    });

    it("should return 'Fizz' on input 3", function() {
        expect(fizzBuzz(3)).toEqual("Fizz");
    });

    it("should return 'Buzz' on input 5", function() {
        expect(fizzBuzz(5)).toEqual("Buzz");
    });

    it("should return 'FizzBuzz' on input 15", function() {
        expect(fizzBuzz(15)).toEqual("FizzBuzz");
    });
});
