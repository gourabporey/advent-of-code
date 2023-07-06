const assert = require('assert');
const { describe, it } = require('node:test');

const { findTotalRibbonLength } = require('../src/ribbon.js');

describe('findTotalRibbonLength', () => {
  it('should give 0 for no dimensions provided', () => {
    assert.strictEqual(findTotalRibbonLength(), 0);
    assert.strictEqual(findTotalRibbonLength(''), 0);
  });

  it('should give 5 for unit length of dimension for 1 box', () => {
    assert.strictEqual(findTotalRibbonLength('1x1x1'), 5);
  });

  it('should give the total ribbon required for one box correctly', () => {
    assert.strictEqual(findTotalRibbonLength('2x3x4'), 34);
    assert.strictEqual(findTotalRibbonLength('1x1x10'), 14);
  });

  it('should give the total ribbon required for multiple present boxes correctly', () => {
    assert.strictEqual(findTotalRibbonLength('2x3x4\n1x1x10'), 48);
  });
});