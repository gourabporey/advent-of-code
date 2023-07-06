const assert = require('assert');
const { describe, it } = require('node:test');
const { PresentBox } = require('../src/present-box');

describe('PresentBox', () => {
  describe('areaOfWrapper', () => {
    it('Should give the total Area correctly for dimensions of any 3 positive dimensions', () => {
      const dimensions1 = { length: 2, width: 3, height: 4 };
      const presentBox1 = new PresentBox(dimensions1);

      const dimensions2 = { length: 1, width: 1, height: 10 };
      const presentBox2 = new PresentBox(dimensions2);

      assert.strictEqual(presentBox1.areaOfWrapper(), 58);
      assert.strictEqual(presentBox2.areaOfWrapper(), 43);
    });
  });
});