const calculateJourneySteps = ({ instruction, nodes }, { from, to }) => {
  let currNode = from;
  let stepsTaken = 0;

  while (currNode !== to) {
    instruction.split('').forEach((direction) => {
      currNode = nodes[currNode][direction];
      stepsTaken++;
    });
  }

  return stepsTaken;
};

module.exports = { calculateJourneySteps };
