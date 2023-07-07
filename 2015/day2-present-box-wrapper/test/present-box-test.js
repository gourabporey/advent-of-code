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

  describe('volume', () => {
    it('should be 0 for any dimensions not specified', () => {
      const dimensions1 = { width: 3, height: 4 };
      const presentBox1 = new PresentBox(dimensions1);

      const dimensions2 = { length: 3, height: 4 };
      const presentBox2 = new PresentBox(dimensions2);

      const dimensions3 = { width: 3, height: 4 };
      const presentBox3 = new PresentBox(dimensions3);

      assert.strictEqual(presentBox1.volume(), 0);
      assert.strictEqual(presentBox2.volume(), 0);
      assert.strictEqual(presentBox3.volume(), 0);
    });

    it('should give the volume correctly', () => {
      const dimensions1 = { width: 3, height: 4, length: 2 };
      const presentBox1 = new PresentBox(dimensions1);

      const dimensions2 = { width: 1, height: 1, length: 10 };
      const presentBox2 = new PresentBox(dimensions2);

      assert.strictEqual(presentBox1.volume(), 24);
      assert.strictEqual(presentBox2.volume(), 10);
    });
  });

  describe('getPerimeterOfFaces', () => {
    it('should give base face, side face and top face perimeters list', () => {
      const dimensions1 = { width: 2, length: 3, height: 4 };
      const presentBox1 = new PresentBox(dimensions1);

      const dimensions2 = { width: 1, length: 10, height: 1 };
      const presentBox2 = new PresentBox(dimensions2);

      assert.deepStrictEqual(presentBox1.getPerimeterOfFaces(), [10, 12, 14]);
      assert.deepStrictEqual(presentBox2.getPerimeterOfFaces(), [22, 4, 22]);
    });
  });
});