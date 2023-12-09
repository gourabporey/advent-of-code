const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

function findlcm(arr) {
  const noOfElements = arr.length;
  let ans = arr[0];

  for (let currElemIndex = 1; currElemIndex < noOfElements; currElemIndex++)
    ans = (arr[currElemIndex] * ans) / gcd(arr[currElemIndex], ans);

  return ans;
}

const calculateJourneyStepsUsingRegex = (
  { instruction, nodes },
  { from, to }
) => {
  const allNodesEndingWithFrom = Object.keys(nodes)
    .filter((node) => from.test(node))
    .map((from) => ({ from }));

  const allReachingSteps = allNodesEndingWithFrom.map((node) => {
    let currNode = node.from;
    let stepsTaken = 0;

    while (!to.test(currNode)) {
      instruction.split('').forEach((direction) => {
        currNode = nodes[currNode][direction];
        stepsTaken++;
      });
    }

    return stepsTaken;
  });

  return findlcm(allReachingSteps);
};

module.exports = { calculateJourneyStepsUsingRegex };
