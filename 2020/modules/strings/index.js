const frequencyOfCharacters = text => {
  const characterCounts = {};

  Array.from(text).forEach((char) => {
    characterCounts[char] = (characterCounts[char] || 0) + 1;
  });

  return characterCounts;
}

module.exports = { frequencyOfCharacters };