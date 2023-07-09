const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const hasVowels = ([...text], count = 1) => {
  return text.filter((char) => VOWELS.includes(char.toLowerCase())).length >= count;
};

const hasRepeatingChar = ([...text]) => {
  return text.some((char, charIndex) => char === text[charIndex + 1]);
};

const hasRestrictedStrings = (string, restrictedStrings) => {
  return restrictedStrings.some((restrictedString) => string.includes(restrictedString));
};

const isNiceString = (string, rules) => {
  const vowelMatchingCriteria = rules?.vowelCount ? hasVowels(string, rules.vowelCount) : true;

  const repeatingCharCriteria = rules?.repeatingChar ? hasRepeatingChar(string) : true;

  const restrictedStringCriteria = rules?.restrictedStrings ? !hasRestrictedStrings(string, rules.restrictedStrings) : true;

  return vowelMatchingCriteria && repeatingCharCriteria && restrictedStringCriteria;
};

countNiceStrings = (rawStrings, rules) => {
  if (!rawStrings) return 0;

  const strings = rawStrings.split('\n');

  return strings.filter((string) => isNiceString(string, rules)).length;
};

module.exports = { countNiceStrings, isNiceString, hasRepeatingChar, hasVowels, hasRestrictedStrings };