const assert = require('assert');
const { describe, it } = require('node:test');

const { Santas } = require('../src/santas');

describe('Santas', () => {
  describe('moveCurrentToNorth', () => {
    it('should move the current santa to north from its current coordinate', (context) => {
      const santa1 = {
        moveToNorth: context.mock.fn(() => true),
      };

      const santa2 = {
        moveToNorth: context.mock.fn(() => true),
      };

      const santas = [santa1, santa2];
      const santaGroup = new Santas(santas);

      assert.ok(santaGroup.moveCurrentToNorth());
      assert.ok(santaGroup.moveCurrentToNorth());
      assert.strictEqual(santa1.moveToNorth.mock.callCount(), 1);
      assert.strictEqual(santa2.moveToNorth.mock.callCount(), 1);
    });
  });
});
