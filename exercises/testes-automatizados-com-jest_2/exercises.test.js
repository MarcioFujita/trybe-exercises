
const { uppercase, findUserById, getRepos, getAnimal } = require('./exercises');

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

describe('Ex3: Testing function findUserById with async/await', () => {
    it('receives an id and should return an user(.them)', async () => {
        expect.assertions(1);
        const user = await findUserById(4);
            expect(user.name).toEqual('Mark');
    });
    it('receives an invalid id and should return an error(.catch)', async () => {
        try {
            await findUserById(3);
        } catch (error) {
            expect(error).toEqual({ error: 'User with 3 not found.' });
        }
    });
});

describe('EX4: Testing function getRepos', () => {
    it('checks if function returns correct projects', () => {
        const url = 'https://api.github.com/orgs/tryber/repos';
        return getRepos(url).then(data => {
            expect(data).toContain('sd-01-week4-5-project-todo-list');
            expect(data).toContain('sd-01-week4-5-project-meme-generator');
      });
    });
});

describe('EX6: Testing function getAnimal', () => {
    describe('Animal name exists', () => {
      it('Returns animal', () => {
        expect.assertions(1);
        return getAnimal('Dorminhoco').then(animal => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
      });
    });
});
  
describe('When there isn´t an animal with this name', () => {
      test('Returns error', () => {
        expect.assertions(1);
        return getAnimal('Bob').catch(error =>
          expect(error).toEqual('Nenhum animal com esse nome!')
        );
      });
});
