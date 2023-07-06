const assert = require('assert');
const { describe, it } = require('node:test');

const { findTotalWrapperArea } = require('../src/wrapper.js');

describe('findTotalWrapperArea', () => {
  it('Should give 0 for no area information provided', () => {
    assert.strictEqual(findTotalWrapperArea(''), 0);
  });

  it('Should give the total area of wrapper when length, width and height are provided for one present box', () => {
    assert.strictEqual(findTotalWrapperArea('2x3x4'), 58);
  });

  it('Should give the total area of all wrappers required for all present boxes', () => {
    assert.strictEqual(findTotalWrapperArea('2x3x4\n1x1x10'), 101);
  });
});