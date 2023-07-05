const { frequencyOfCharacters } = require('strings');
const { toNumber, isInRange } = require('numbers');

const isValidPassword = ({ password, policy }) => {
  const frequency = frequencyOfCharacters(password);
  const { char, min, max } = policy;
  return isInRange({ min, max }, frequency[char]);
}

const extractPolicy = password => {
  const [range, char, passwordText] = password.split(/:* /);
  const [min, max] = range.split('-').map(toNumber);
  return { password: passwordText, policy: { char, min, max } };
}

module.exports = { isValidPassword, extractPolicy };