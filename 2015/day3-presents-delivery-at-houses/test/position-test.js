const { describe, it } = require('node:test');
const assert = require('assert');
const { Position } = require('../src/position.js');

describe('Position', () => {
  describe('east', () => {
    it('should increase the x-coordinate with unit length', () => {
      const position = new Position(0, 0);
      position.east();
      assert.strictEqual(position.toString(), '1:0');
    });
  });

  describe('west', () => {
    it('should decrease the x-coordinate with unit length', () => {
      const position = new Position(0, 0);
      position.west();
      assert.strictEqual(position.toString(), '-1:0');
    });
  });

  describe('south', () => {
    it('should increase the y-coordinate with unit length', () => {
      const position = new Position(0, 0);
      position.south();
      assert.strictEqual(position.toString(), '0:1');
    });
  });

  describe('north', () => {
    it('should decrease the y-coordinate with unit length', () => {
      const position = new Position(0, 0);
      position.north();
      assert.strictEqual(position.toString(), '0:-1');
    });
  });
});