const breakTie = (a, b, cards) => {
  for (let charIndex = 0; charIndex <= 5; charIndex++) {
    const [p1, p2] = [a, b].map((w) => cards.indexOf(w[charIndex]));
    if (p1 === p2) continue;
    return p2 - p1;
  }

  return 0;
};

const calculateTotalWinnings = (handsAndBids, cards, matchers) => {
  const sortedCards = cards;
  matchers.reverse();

  const sortedHandsAndBids = handsAndBids.sort((a, b) => {
    const jokerWordA = a.jokerWord;
    const jokerWordB = b.jokerWord;

    let pointA = 0;
    let pointB = 0;
    let matcherId = 0;

    while (!pointA || !pointB) {
      const matcher = matchers[matcherId];
      matcherId++;

      if (matcher(jokerWordA)) pointA = matcherId;
      if (matcher(jokerWordB)) pointB = matcherId;
    }

    const pointDifference = pointA - pointB;

    return pointDifference !== 0
      ? pointDifference
      : breakTie(a.word, b.word, sortedCards);
  });

  const add = (a, b) => a + b;

  return sortedHandsAndBids
    .map(({ bid }, index) => bid * (index + 1))
    .reduce(add, 0);
};

module.exports = { calculateTotalWinnings };
