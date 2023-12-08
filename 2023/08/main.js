const fs = require('fs');
const { calculateJourneySteps } = require('./src/problem-1');

const parseNavigationInstruction = (rawData) => {
  const [instruction, nodes] = rawData.split('\n\n');
  const nodesNavigation = Object.fromEntries(
    nodes.split('\n').map((node) => {
      const [n, L, R] = node.match(/[A-Z]{3}/g);
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

  console.log('Steps taken', stepsTaken);
};

main();
