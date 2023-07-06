const { describe, it } = require('node:test');
const assert = require('assert');
const { countTreesOnPath } = require('../src/toboggan-trajectory-1');

describe('countTreesOnPath', () => {
  it('should be 0 when there is no tree on the trajectory', () => {
    const area = [['.', '.'], ['.', '.']];
    const slope = { x: 1, y: 1 };

    assert.strictEqual(countTreesOnPath(area, slope), 0);
  });

  it('should be 1 when there is one tree on the path of the path', () => {
    const area = [['.', '.'], ['.', '#']];
    const slope = { x: 1, y: 1 };

    assert.strictEqual(countTreesOnPath(area, slope), 1);
  });

  it('Should be able to give count for repeating tree pattern', () => {
    const area = [['.', '.', '#'], ['.', '#', '.'], ['.', '.', '#']];
    const slope = { x: 2, y: 1 };

    assert.strictEqual(countTreesOnPath(area, slope), 0);
  });
});