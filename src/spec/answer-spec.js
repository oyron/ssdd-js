'use strict';

let answer = require('../lib/answer.js');

describe("answer", function() {
    it("to life the universe and everything", function() {
        expect(answer()).toEqual(42);
    });
});
