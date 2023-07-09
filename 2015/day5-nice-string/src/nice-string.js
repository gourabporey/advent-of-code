const hasVowels = ([...text], count) => {
  return text.filter((char) => ['a', 'e', 'i', 'o', 'u'].includes(char)).length >= count;
};

countNiceStrings = (rawStrings, rules) => {
  if (!rawStrings) return 0;
  const strings = rawStrings.split('\n');
  return strings.filter((string) => hasVowels(string, rules.vowelCount)).length;
};

module.exports = { countNiceStrings };