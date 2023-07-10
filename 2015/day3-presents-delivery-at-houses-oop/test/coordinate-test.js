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

  describe('toSouth', () => {
    it('should give the immediate next coordinate to south', () => {
      const coordinate = new Coordinate(0, 0);
      const coordinateToSouth = new Coordinate(0, -1);
      assert.ok(coordinate.toSouth().equals(coordinateToSouth));
    });
  });

  describe('toWest', () => {
    it('should give the immediate next coordinate to west', () => {
      const coordinate = new Coordinate(0, 0);
      const coordinateToWest = new Coordinate(-1, 0);
      assert.ok(coordinate.toWest().equals(coordinateToWest));
    });
  });

  describe('toEast', () => {
    it('should give the immediate next coordinate to west', () => {
      const coordinate = new Coordinate(0, 0);
      const coordinateToEast = new Coordinate(1, 0);
      assert.ok(coordinate.toEast().equals(coordinateToEast));
    });
  });
});
