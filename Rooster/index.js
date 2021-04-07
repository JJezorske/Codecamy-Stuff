const assert = require('assert');
const Rooster = require('../index.js')

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
        // Define expected output
        const expected = 'cock-a-doodle-doo!';
        
        // Call Rooster.announceDawn and store result in variable
       const announce = Rooster.announceDawn()
        // Use an assert method to compare actual and expected result
        assert.equal(announce, expected)
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
       //Define expected output as string
        const expected = '5';
        
        // Call Rooster.timeAtDawn with number argument and store result in variable
       const hour = Rooster.timeAtDawn(5)
        // Use an assert method to compare actual and expected result
        assert.strictEqual(hour, expected)
    });
    it('throws an error if passed a number less than 0', () => {
       //Define expected output and test input
        const expected = RangeError;
        const inputNum = -1;
        
        // Use an assert method to compare actual and expected result
        assert.throws( () => {
          Rooster.timeAtDawn(inputNum)
        },expected);
    });
    it('throws an error if passed a number more than 23', () => {
       //Define expected output and test input
        const expected = RangeError;
        const inputNum = 25;
        
        // Use an assert method to compare actual and expected result with function call as first parameter and expected output variable as the second
        assert.throws( () => {
          Rooster.timeAtDawn(inputNum)
        },expected);
    });
  });
});
