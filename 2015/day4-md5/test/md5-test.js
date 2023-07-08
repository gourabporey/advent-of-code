const { describe, it } = require('node:test');
const assert = require('assert');
const { getSuffixOfMd5Message } = require('../src/md5');

describe('getSuffixOfMd5Message', () => {
  it('should give no suffix when no hashPrefix is provided', () => {
    assert.strictEqual(getSuffixOfMd5Message('abcdef'), '');
    assert.strictEqual(getSuffixOfMd5Message('abcdef', ''), '');
  });

  it('should give lowest number message suffix that yields to required hash prefix', () => {
    assert.strictEqual(getSuffixOfMd5Message('abcdef', '00000'), 609043);
    assert.strictEqual(getSuffixOfMd5Message('pqrstuv', '00000'), 1048970);
  });
});