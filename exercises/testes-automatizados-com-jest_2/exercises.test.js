
const { it, expect } = require('@jest/globals');
const { uppercase, findUserById } = require('./exercises');

describe('EX1: Testing function uppercase', () => {
    it('receives a string and should convert it to uppercase', (done) => {
        uppercase('test', (str) => {
            expect(str).toBe('TEST');
            done();
          });
    });
});

describe('Ex2: Testing function findUserById', () => {
    it('receives an id and should return an user', () => {
        expect.assertions(1);
        return findUserById(4).then(user => {
            expect(user.name).toEqual('Mark');
        });
    });
    it('receives an invalid id and should return an error', () => {
        return findUserById(3).catch(error => {
            expect(error).toEqual({ error: 'User with 3 not found.' });
        });
    });
});
