const assert = require('assert');
const { describe, it } = require('node:test');

const { Elf } = require('../src/elf');

describe('Elf', () => {
  describe('giveDirections', () => {
    it('should not give any direction for no directions', (context) => {
      const santas = {
        moveCurrentToNorth: context.mock.fn(),
        moveCurrentToSouth: context.mock.fn(),
        moveCurrentToWest: context.mock.fn(),
        moveCurrentToEast: context.mock.fn(),
      };

      const elf = new Elf(santas);
      const directions = '';

      elf.giveDirections(directions);

      assert.deepStrictEqual(elf.getHousesVisited(), {});
      assert.strictEqual(santas.moveCurrentToEast.mock.callCount(), 0);
      assert.strictEqual(santas.moveCurrentToWest.mock.callCount(), 0);
      assert.strictEqual(santas.moveCurrentToSouth.mock.callCount(), 0);
      assert.strictEqual(santas.moveCurrentToNorth.mock.callCount(), 0);
    });
  });
});
