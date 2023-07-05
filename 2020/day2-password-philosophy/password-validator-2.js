const { toNumber } = require("numbers");

const isValidPassword = ({ password, policy }) => {
  const { char, positions } = policy;
  const isInPositionOne = password[positions[0] - 1] === char;
  const isInPositionTwo = password[positions[1] - 1] === char;

  return isInPositionOne !== isInPositionTwo;
}

const extractPolicy = password => {
  const [positionsText, char, passwordText] = password.split(/:* /);
  const positions = positionsText.split('-').map(toNumber);
  return { password: passwordText, policy: { char, positions } }
}

module.exports = { isValidPassword, extractPolicy };