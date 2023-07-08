const { getSuffixOfMd5Message } = require('./src/md5');

const main = () => {
  const adventCoins = getSuffixOfMd5Message('iwrupvqb', '00000');
  console.log('Part 1: Advent Coins:', adventCoins);
};

main();