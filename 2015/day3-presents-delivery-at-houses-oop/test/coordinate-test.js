const assert = require('assert');
const { describe, it } = require('node:test');

const { Coordinate } = require('../src/coordinate');

describe('Coordinate', () => {
  describe('toNorth', () => {
    it('should give the immediate next coordinate to north', () => {
      const coordinate = new Coordinate(0, 0);
      const coordinateToNorth = new Coordinate(0, 1);
      assert.ok(coordinate.toNorth().equals(coordinateToNorth));
    });
  });
});
