const { getSuffixOfMd5Message } = require('./src/md5');

const main = () => {
  const adventCoins1 = getSuffixOfMd5Message('iwrupvqb', '00000');
  const adventCoins2 = getSuffixOfMd5Message('iwrupvqb', '000000');
  console.log('Part 1: Advent Coins:', adventCoins1);
  console.log('Part 2: Advent Coins:', adventCoins2);
};

main();