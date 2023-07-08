const { describe, it } = require('node:test');
const assert = require('assert');
const { getSuffixOfMd5Message } = require('../src/md5');

describe('getSuffixOfMd5Message', () => {
  it('should give lowest number message suffix that yields to required hash prefix', () => {
    assert.strictEqual(getSuffixOfMd5Message('abcdef', '00000'), 609043);
  });
});