const { frequencyOfCharacters } = require('strings');
const { toNumber, isInRange } = require('numbers');

const isValidPassword = ({ password, policy }) => {
  const frequency = frequencyOfCharacters(password);
  const { char, min, max } = policy;
  return isInRange({ min, max }, frequency[char]);
}

const generatePolicy = password => {
  const [rangeInformation, char, passwordText] = password.split(/:* /);
  const [min, max] = rangeInformation.split('-').map(toNumber);
  return { password: passwordText, policy: { char, min, max } };
}

module.exports = { isValidPassword, generatePolicy };