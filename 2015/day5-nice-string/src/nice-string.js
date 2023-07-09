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
  if (!rules) return true;

  const {
    vowelCount,
    repeatingChar,
    restrictedStrings,
    twoLetterPair,
    repeatingCharWithOneInMiddle,
  } = rules;

  const satisfiesVowelMatching = vowelCount
    ? hasVowels(string, vowelCount)
    : true;

  const satisfiesLetterRepetition = repeatingChar
    ? hasRepeatingChar(string)
    : true;

  const satisfiesRestrictedStringsExclusion = restrictedStrings
    ? !hasRestrictedStrings(string, restrictedStrings)
    : true;

  const satisfiesTwoLetterPair = twoLetterPair
    ? hasPairOfTwoLetters(string)
    : true;

  const satisfiesLetterRepetitionWithOneLetterInMiddle =
    repeatingCharWithOneInMiddle ? /(.).\1/.test(string) : true;

  return (
    satisfiesVowelMatching &&
    satisfiesLetterRepetition &&
    satisfiesRestrictedStringsExclusion &&
    satisfiesTwoLetterPair &&
    satisfiesLetterRepetitionWithOneLetterInMiddle
  );
};

countNiceStrings = (rawStrings, rules) => {
  if (!rawStrings) return 0;

  const strings = rawStrings.split('\n');

  return strings.filter((string) => isNiceString(string, rules)).length;
};

module.exports = {
  countNiceStrings,
  isNiceString,
  hasRepeatingChar,
  hasVowels,
  hasRestrictedStrings,
  hasPairOfTwoLetters,
};
