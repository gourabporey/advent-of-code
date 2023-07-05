const { describe, it } = require('node:test');
const assert = require('assert');
const { isValidPassword } = require('../password-validator-2');

describe('isValidPassword', () => {
  it('Should be true when the password has only one position containing the character', () => {
    const policy = { char: 'a', positions: [1, 3] };
    const password = 'abbcde';

    assert.ok(isValidPassword({ password, policy }));
  });

  it('should be false when the password does not have the required character at any of the positions', () => {
    const policy = { char: 'c', positions: [1, 3] };
    const password = 'abbcde';

    assert.strictEqual(isValidPassword({ password, policy }), false);
  });

  it('should be false when the password have the required character at both the positions', () => {
    const policy = { char: 'b', positions: [2, 3] };
    const password = 'abbcde';

    assert.strictEqual(isValidPassword({ password, policy }), false);
  });
});