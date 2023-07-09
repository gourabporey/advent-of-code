const assert = require('assert');
const { describe, it } = require('node:test');

const { countNiceStrings, hasVowels, hasRepeatingChar, isNiceString, hasRestrictedStrings, hasPairOfTwoLetters } = require('../src/nice-string');

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

describe('hasRestrictedStrings', () => {
  it('should be true if the string includes any of the restricted strings', () => {
    const string = 'Hello world!';
    const restrictedStrings = ['world', 'foo'];

    const result = hasRestrictedStrings(string, restrictedStrings);

    assert.strictEqual(result, true);
  });

  it('should be false if the string does not include any of the restricted strings', () => {
    const string = 'Hello world!';
    const restrictedStrings = ['foo', 'bar'];

    const result = hasRestrictedStrings(string, restrictedStrings);

    assert.strictEqual(result, false);
  });

  it('should be false if the restricted strings array is empty', () => {
    const string = 'Hello world!';
    const restrictedStrings = [];

    const result = hasRestrictedStrings(string, restrictedStrings);

    assert.strictEqual(result, false);
  });

  it('should be false if the string is empty', () => {
    const string = '';
    const restrictedStrings = ['foo', 'bar'];

    const result = hasRestrictedStrings(string, restrictedStrings);

    assert.strictEqual(result, false);
  });

  it('should be false if both the string and restricted strings array are empty', () => {
    const string = '';
    const restrictedStrings = [];

    const result = hasRestrictedStrings(string, restrictedStrings);

    assert.strictEqual(result, false);
  });
});

describe('hasPairOfTwoLetters', () => {
  it('should be false for no string', () => {
    assert.strictEqual(hasPairOfTwoLetters(), false);
  });

  it('should be true for text containing a pair of two letter', () => {
    assert.strictEqual(hasPairOfTwoLetters('gogo'), true);
  });

  it('should be false for overlapping two letter pairs', () => {
    assert.strictEqual(hasPairOfTwoLetters('aaa'), false);
  });

  it('should be false for text having no two letter pairs', () => {
    assert.strictEqual(hasPairOfTwoLetters('qwerty'), false);
  });
});

describe('isNiceString', () => {
  it('should be true for no rules', () => {
    assert.strictEqual(isNiceString(''), true);
    assert.strictEqual(isNiceString('gourab'), true);
  });

  it('should be true for a string that satisfies all the rules', () => {
    const rules1 = {
      vowelCount: 2,
      repeatingChar: true
    };

    assert.strictEqual(isNiceString('hello', rules1), true);
    assert.strictEqual(isNiceString('aaa', rules1), true);

    const rules2 = {
      vowelCount: 3,
      repeatingChar: true,
      restrictedStrings: ['ab', 'xy', 'pq', 'cd']
    };

    assert.strictEqual(isNiceString('aaa', rules2), true);
  });

  it('should be false for a string that doesn\'t satisfies all the rules', () => {
    const rules = {
      vowelCount: 2,
      repeatingChar: true
    };

    assert.strictEqual(isNiceString('gourab', rules), false);
    assert.strictEqual(isNiceString('hell', rules), false);
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