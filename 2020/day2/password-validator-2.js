const isValidPassword = (password, rules) => {
  const { char, positions } = rules;
  const isInPositionOne = password[positions[0] - 1] === char;
  const isInPositionTwo = password[positions[1] - 1] === char;

  return isInPositionOne !== isInPositionTwo;
}

module.exports = { isValidPassword };