
const { expect } = require('@jest/globals');
const { doesNotMatch } = require('assert');
const uppercase = require('./exercises');

describe('Testing function uppercase', () => {
    it('receives a string and should convert it to uppercase', (done) => {
        uppercase('test', (str) => {
            expect(str).toBe('TEST');
            done();
          });
    });
});