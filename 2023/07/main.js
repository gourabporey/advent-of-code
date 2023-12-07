const fs = require('fs');
const {
  isFiveOfKind,
  isFourOfAKind,
  isFullHose,
  isThreeOfAKind,
  isTwoPair,
  isOnePair,
  highCard,
  charCountOf,
} = require('./src/matchers');
const { calculateTotalWinnings } = require('./src/problem');

const cards = [
  'A',
  'K',
  'Q',
  // 'J',
  'T',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
  'J',
];
const matchers = [
  isFiveOfKind,
  isFourOfAKind,
  isFullHose,
  isThreeOfAKind,
  isTwoPair,
  isOnePair,
  highCard,
];

const resolveJ = (word) => {
  const charCounts = charCountOf(word);
  delete charCounts.J;

  const sortedCharCounts = Object.entries(charCounts).sort(
    ([_, a], [__, b]) => {
      return b - a;
    }
  );

  const wildWord =
    sortedCharCounts.length === 0
      ? 'AAAAA'
      : word.replaceAll('J', sortedCharCounts[0][0]);

  return wildWord;
};

const parseHandsAndBids = (rawHandsAndBids) => {
  return rawHandsAndBids.split('\n').map((line) => {
    const [word, bid] = line.split(/\s+/);
    const jokerWord = resolveJ(word);
    return { word, bid: +bid, jokerWord };
  });
};

const main = () => {
  const rawHandsAndBids = fs.readFileSync('./data/input.txt', 'utf8');
  const handsAndBids = parseHandsAndBids(rawHandsAndBids);
  const totalWinnings = calculateTotalWinnings(handsAndBids, cards, matchers);

  console.log('Total winnings', totalWinnings);
};

main();
