const assert = require('assert');
const { describe, it } = require('node:test');
const { Position } = require('../src/position');
const { DeliveryPerson } = require('../src/delivery-person');

describe('DeliveryPerson', () => {
  describe('moveToEast', () => {
    it('should change the delivery person position to the east', () => {
      const position = new Position(0, 0);
      const santa = new DeliveryPerson(position);

      santa.moveToEast();

      assert.strictEqual(santa.getCurrentPosition(), '1:0');
    });
  });

  describe('moveToWest', () => {
    it('should change the delivery person position to the west', () => {
      const position = new Position(0, 0);
      const santa = new DeliveryPerson(position);

      santa.moveToWest();

      assert.strictEqual(santa.getCurrentPosition(), '-1:0');
    });
  });

  describe('moveToNorth', () => {
    it('should change the delivery person position to the north', () => {
      const position = new Position(0, 0);
      const santa = new DeliveryPerson(position);

      santa.moveToNorth();

      assert.strictEqual(santa.getCurrentPosition(), '0:-1');
    });
  });

  describe('moveToSouth', () => {
    it('should change the delivery person position to the south', () => {
      const position = new Position(0, 0);
      const santa = new DeliveryPerson(position);

      santa.moveToSouth();

      assert.strictEqual(santa.getCurrentPosition(), '0:1');
    });
  });
});