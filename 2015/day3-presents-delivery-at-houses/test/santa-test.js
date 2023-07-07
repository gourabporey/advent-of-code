const assert = require('assert');
const { describe, it } = require('node:test');

const { noOfHousesCovered } = require('../src/santa.js');

describe('noOfHousesCovered', () => {
  it('should be two houses for one direction instruction', () => {
    assert.strictEqual(noOfHousesCovered('>'), 2);
    assert.strictEqual(noOfHousesCovered('^'), 2);
    assert.strictEqual(noOfHousesCovered('<'), 2);
    assert.strictEqual(noOfHousesCovered('v'), 2);
  });

  it('should be 4 houses for axes alternatively', () => {
    assert.strictEqual(noOfHousesCovered('^>v<'), 4);
    assert.strictEqual(noOfHousesCovered('v>^<'), 4);
  });

  it('should be 2 houses if only 2direction instruction is alternating', () => {
    assert.strictEqual(noOfHousesCovered('^v^v^v^v^v'), 2);
    assert.strictEqual(noOfHousesCovered('><><><><'), 2);
  });
});