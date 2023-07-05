const fs = require('fs');
const { generatePolicy, isValidPassword } = require('./password-validator-2');

const noOfValidPasswords = passwords => {
  return passwords.filter(isValidPassword).length;
}

const generatePasswordInformation = (rawPasswordsData) => {
  return rawPasswordsData.split('\n').map(generatePolicy);
}

const main = () => {
  fs.readFile('./input.txt', 'utf-8', (err, data) => {
    if (err) return;

    const passwordInformation = generatePasswordInformation(data);
    console.log(noOfValidPasswords(passwordInformation));
  });
}

main();