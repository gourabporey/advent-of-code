const fs = require('fs');
const { extractPolicy, isValidPassword } = require('./password-validator-2');

const noOfValidPasswords = passwords => {
  return passwords.filter(isValidPassword).length;
}

const extractPasswordAndPolicy = (rawPasswordsData) => {
  return rawPasswordsData.split('\n').map(extractPolicy);
}

const main = () => {
  fs.readFile('./input.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    };

    const passwordInformation = extractPasswordAndPolicy(data);
    console.log(noOfValidPasswords(passwordInformation));
  });
}

main();