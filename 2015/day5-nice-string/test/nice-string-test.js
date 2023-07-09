const assert = require('assert');
const { describe, it } = require('node:test');

const { countNiceStrings } = require('../src/nice-string');

describe('countNiceStrings', () => {
  it('should give 0 for no strings provided', () => {
    assert.strictEqual(countNiceStrings(''), 0);
  });

  it('should give 1 for one string with only 3 vowels', () => {
    const rules = { vowelCount: 3 };
    assert.strictEqual(countNiceStrings('aaa', rules), 1);
  });
});