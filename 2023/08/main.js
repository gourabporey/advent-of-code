const fs = require('fs');
const { calculateJourneySteps } = require('./src/problem-1');
const { calculateJourneyStepsUsingRegex } = require('./src/problem-2');

const parseNavigationInstruction = (rawData) => {
  const [instruction, nodes] = rawData.split('\n\n');
  const nodesNavigation = Object.fromEntries(
    nodes.split('\n').map((node) => {
      const [n, L, R] = node.match(/[A-Z0-9]{3}/g);
      return [n, { L, R }];
    })
  );

  return { instruction, nodes: nodesNavigation };
};

const main = () => {
  const rawData = fs.readFileSync('./data/input.txt', 'utf8');
  const navigationInstruction = parseNavigationInstruction(rawData);
  const stepsTaken = calculateJourneySteps(navigationInstruction, {
    from: 'AAA',
    to: 'ZZZ',
  });

  const stepsTakenForAllAReachingZ = calculateJourneyStepsUsingRegex(
    navigationInstruction,
    { from: /A$/, to: /Z$/ }
  );

  console.log('Steps taken for AAA to ZZZ', stepsTaken);
  console.log('Steps taken for all A to Z', stepsTakenForAllAReachingZ);
};

main();
