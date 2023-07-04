const fs = require('fs');
const { generatePasswordInformation, noOfValidPasswords } = require('./password-validator-1');

const main = () => {
  fs.readFile('./input.txt', 'utf-8', (err, data) => {
    if (err) return;

    const passwordInformation = generatePasswordInformation(data);
    console.log(noOfValidPasswords(passwordInformation));
  });
}

main();