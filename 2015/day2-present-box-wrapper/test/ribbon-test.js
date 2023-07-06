const assert = require('assert');
const { describe, it } = require('node:test');

const { findRibbonLength } = require('../src/ribbon.js');

describe('findRibbonLength', () => {
  it('should give 0 for no dimensions provided', () => {
    assert.strictEqual(findRibbonLength(), 0);
    assert.strictEqual(findRibbonLength(''), 0);
  });

  it('should give 5 for unit length of dimension for 1 box', () => {
    assert.strictEqual(findRibbonLength('1x1x1'), 5);
  });
});