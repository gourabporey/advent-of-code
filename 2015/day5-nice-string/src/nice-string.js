const hasVowels = ([...text], count = 1) => {
  return text.filter((char) => ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())).length >= count;
};

const hasRepeatingChar = ([...text]) => {
  return text.some((char, charIndex) => char === text[charIndex + 1]);
};

countNiceStrings = (rawStrings, rules) => {
  if (!rawStrings) return 0;

  const strings = rawStrings.split('\n');

  return strings.filter((string) => {
    const vowelMatchingCriteria = rules.vowelCount ? hasVowels(string, rules.vowelCount) : true;

    const repeatingCharCriteria = rules.repeatingChar ? hasRepeatingChar(string) : true;

    return vowelMatchingCriteria && repeatingCharCriteria;
  }).length;
};

module.exports = { countNiceStrings, hasRepeatingChar, hasVowels };