const assert = require('assert');
const { describe, it } = require('node:test');

const { countNiceStrings, hasVowels, hasRepeatingChar } = require('../src/nice-string');

describe('hasVowels', () => {
  it('should give false for no text', () => {
    assert.strictEqual(hasVowels(''), false);
  });

  it('should check the text to have 1 vowel for vowel count', () => {
    assert.strictEqual(hasVowels('ab'), true);
    assert.strictEqual(hasVowels('bb'), false);
  });

  it('should be false when required count of vowel is not present in text', () => {
    assert.strictEqual(hasVowels('abab', 3), false);
  });

  it('should be true when required count of vowel is present is present ', () => {
    assert.strictEqual(hasVowels('gourab', 3), true);
    assert.strictEqual(hasVowels('I am a boy', 4), true);
  });
});

describe('hasRepeatingChar', () => {
  it('should be false for no text', () => {
    assert.strictEqual(hasRepeatingChar(''), false);
  });

  it('should be true for text having only 2 characters repeating', () => {
    assert.strictEqual(hasRepeatingChar('aa'), true);
  });

  it('should be false for text having only two different characters', () => {
    assert.strictEqual(hasRepeatingChar('ab'), false);
  });

  it('should true a text having repeating chars at any place', () => {
    assert.strictEqual(hasRepeatingChar('qwertyuiopaaa'), true);
  });
});

describe('countNiceStrings', () => {
  it('should give 0 for no strings provided', () => {
    assert.strictEqual(countNiceStrings(''), 0);
  });

  it('should give 1 for one string with only 3 vowels', () => {
    const rules = { vowelCount: 3 };
    assert.strictEqual(countNiceStrings('aaa', rules), 1);
    assert.strictEqual(countNiceStrings('ababa', rules), 1);
  });

  it('should give 1 for 1 string having a repeating character', () => {
    const rules = { repeatingChar: true };
    assert.strictEqual(countNiceStrings('bb', rules), 1);
  });
});