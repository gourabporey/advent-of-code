const { frequencyOfCharacters } = require('strings');
const { toNumber, isInRange } = require('numbers');

const isValid = (password, rules) => {
  const frequency = frequencyOfCharacters(password);
  const { char, min, max } = rules;
  return isInRange({ min, max }, frequency[char]);
}

const noOfValidPasswords = passwords => {
  return passwords.reduce((validPasswordCount, { password, policy }) => {
    return isValid(password, policy) ? validPasswordCount + 1 : validPasswordCount;
  }, 0);
}

const generatePolicy = password => {
  const [rangeInformation, char, passwordText] = password.split(/:* /);
  const [min, max] = rangeInformation.split('-').map(toNumber);
  return { password: passwordText, policy: { char, min, max } };
}

const generatePasswordInformation = (rawPasswordsData) => {
  return rawPasswordsData.split('\n').map(generatePolicy);
}

module.exports = { noOfValidPasswords, generatePasswordInformation };