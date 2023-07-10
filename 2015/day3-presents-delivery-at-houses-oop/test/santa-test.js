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
});
