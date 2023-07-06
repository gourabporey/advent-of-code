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

  it('should give a list of dimensions for multiple dimensions separated by new line', () => {
    const rawDimensions = '4x23x21\n22x29x19';
    const dimensions = [
      { length: 4, width: 23, height: 21 },
      { length: 22, width: 29, height: 19 },
    ];

    assert.deepStrictEqual(extractDimensions(rawDimensions), dimensions);
  });
});