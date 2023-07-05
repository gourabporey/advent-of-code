## Day 2: Password Philosophy

### Part 1: Number of valid passwords

Input:
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc

Output:
2

### Approach 1:

- we're validating the passwords and getting the number of valid passwords.
  - validPasswordsCount(passwords) => Integer
- to check each and every password the function will take a ruleset and a password to check
  - isValid(password, rules)
  - rules is an object that contains a character and the min and max count of the character
    - rules = {
      char: 'a',
      minCount: 1,
      maxCount: 2
      }
  - I will use dependency function that will give me the **frequency** of the characters
  - and another dependency function that will tell if any number **is in a range**
