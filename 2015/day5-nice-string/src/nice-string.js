const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const isVowel = (letter) => VOWELS.includes(letter.toLowerCase());

const hasVowels = ([...text], count = 1) => {
  return text.filter(isVowel).length >= count;
};

const hasRepeatingChar = ([...text]) => {
  return text.some((letter, letterIndex) => letter === text[letterIndex + 1]);
};

const hasRestrictedStrings = (text, restrictedStrings) => {
  return restrictedStrings.some((string) => text.includes(string));
};

const hasPairOfTwoLetters = (text) => {
  return /(..).*\1/.test(text);
};

const isNiceString = (string, rules) => {
  const vowelMatchingCriteria = rules?.vowelCount ? hasVowels(string, rules.vowelCount) : true;

  const repeatingCharCriteria = rules?.repeatingChar ? hasRepeatingChar(string) : true;

  const restrictedStringCriteria = rules?.restrictedStrings ? !hasRestrictedStrings(string, rules.restrictedStrings) : true;

  const twoLetterPairCriteria = rules?.twoLetterPair ? hasPairOfTwoLetters(string) : true;

  const repeatingCharWithOneCharInMiddleCriteria = rules?.repeatingCharWithOneInMiddle ? /(.).\1/.test(string) : true;

  return vowelMatchingCriteria && repeatingCharCriteria && restrictedStringCriteria && twoLetterPairCriteria && repeatingCharWithOneCharInMiddleCriteria;
};

countNiceStrings = (rawStrings, rules) => {
  if (!rawStrings) return 0;

  const strings = rawStrings.split('\n');

  return strings.filter((string) => isNiceString(string, rules)).length;
};

module.exports = { countNiceStrings, isNiceString, hasRepeatingChar, hasVowels, hasRestrictedStrings, hasPairOfTwoLetters };