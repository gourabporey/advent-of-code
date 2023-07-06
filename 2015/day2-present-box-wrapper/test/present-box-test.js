const assert = require('assert');
const { describe, it } = require('node:test');
const { PresentBox } = require('../src/present-box');

describe('PresentBox', () => {
  describe('areaOfWrapper', () => {
    it('Should give the total Area correctly for dimensions of any 3 positive dimensions', () => {
      const dimensions = { length: 2, width: 3, height: 4 };
      const presentBox = new PresentBox(dimensions);

      assert.strictEqual(presentBox.areaOfWrapper(), 58);
    });
  });
});