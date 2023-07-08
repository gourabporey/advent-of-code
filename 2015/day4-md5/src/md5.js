const { createHash } = require('node:crypto');

const md5 = (message) => {
  return createHash('md5').update(message).digest('hex');
};

const getSuffixOfMd5Message = (messagePrefix, hashPrefix) => {
  let messageSuffix = 0;

  while (true) {
    const message = messagePrefix + messageSuffix;
    const hash = md5(message);
    if (hash.startsWith(hashPrefix)) return messageSuffix;
    messageSuffix++;
  }
};

module.exports = { getSuffixOfMd5Message };