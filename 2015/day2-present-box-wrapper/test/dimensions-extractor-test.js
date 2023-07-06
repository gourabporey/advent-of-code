const assert = require('assert');
const { describe, it } = require('node:test');
const { extractDimensions } = require('../src/dimensions-extractor.js');

describe('extractDimensions', () => {
  it('should give dimension consisting length, width, height', () => {
    const rawDimensions = '4x23x21';
    const dimensions = [
      { length: 4, width: 23, height: 21 },
    ];

    assert.deepStrictEqual(extractDimensions(rawDimensions), dimensions);
  });
});