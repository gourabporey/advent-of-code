const assert = require('assert');
const { describe, it } = require('node:test');

const { Santa } = require('../src/santa');

describe('Santa', () => {
  describe('moveToNorth', () => {
    it('should move the santa to the north of its current coordinate', (context) => {
      const coordinate = {
        toNorth: context.mock.fn(() => true),
      };

      const santa = new Santa(coordinate);

      assert.ok(santa.moveToNorth());
      assert.strictEqual(coordinate.toNorth.mock.callCount(), 1);
    });
  });

  describe('moveToSouth', () => {
    it('should move the santa to the south of its current coordinate', (context) => {
      const coordinate = {
        toSouth: context.mock.fn(() => true),
      };

      const santa = new Santa(coordinate);

      assert.ok(santa.moveToSouth());
      assert.strictEqual(coordinate.toSouth.mock.callCount(), 1);
    });
  });

  describe('moveToEast', () => {
    it('should move the santa to the east of its current coordinate', (context) => {
      const coordinate = {
        toEast: context.mock.fn(() => true),
      };

      const santa = new Santa(coordinate);

      assert.ok(santa.moveToEast());
      assert.strictEqual(coordinate.toEast.mock.callCount(), 1);
    });
  });

  describe('moveToWest', () => {
    it('should move the santa to the west of its current coordinate', (context) => {
      const coordinate = {
        toWest: context.mock.fn(() => true),
      };

      const santa = new Santa(coordinate);

      assert.ok(santa.moveToWest());
      assert.strictEqual(coordinate.toWest.mock.callCount(), 1);
    });
  });
});
