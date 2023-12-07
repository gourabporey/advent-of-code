const charCountOf = (word) =>
  word.split('').reduce(
    (charCounts, char) => ({
      ...charCounts,
      [char]: (charCounts[char] || 0) + 1,
    }),
    {}
  );

const isFiveOfKind = (word) => calculateCounts(word).length === 1;

const calculateCounts = (word) => Object.values(charCountOf(word));

const isFourOfAKind = (word) => calculateCounts(word).includes(4);

const isFullHose = (word) => {
  const counts = calculateCounts(word);
  return counts.includes(3) && counts.includes(2);
};

const isThreeOfAKind = (word) => {
  const counts = calculateCounts(word);
  return counts.includes(3) && counts.includes(1);
};

const isTwoPair = (word) => {
  const counts = calculateCounts(word);
  const countOfCounts = charCountOf(counts.join(''));
  return countOfCounts[2] === 2;
};

const isOnePair = (word) => {
  const counts = calculateCounts(word);
  return counts.length === 4;
};

const highCard = (word) => {
  const counts = calculateCounts(word);
  return counts.length === 5;
};

module.exports = {
  charCountOf,
  isFiveOfKind,
  calculateCounts,
  isFourOfAKind,
  isFullHose,
  isThreeOfAKind,
  isTwoPair,
  isOnePair,
  highCard,
};
