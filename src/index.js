import readlineSync from 'readline-sync';
import oddOrEvenCheck from './games/odd-or-even';
import { randomNum, randomOpr } from './brainMath';
import calc from './games/calc';
import gcdCheck from './games/gcd';
import balanceTheNumber from './games/balance';

const endStatement = (arg) => {
  if (arg === 'exitState') {
    return console.log('\nToo bad. Come back when you\'re ready.');
  }
  return console.log('\nHmm. Well done. Let\'s see if you can pass all the challenges.');
};

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('\nMay I have you name, please? ');
  console.log(`\nNice to meet you, ${userName}`);
};

export const displayOptions = () => {
  console.log('\nYou are about to start a chalenge. So far you have these options:\na) Odd or Even? To start simply type "brain-even"');
  console.log('\nb) Calculate the equation. Type "brain-calc"');
  console.log('\nc) Find The Greatest Common Divisor by typing "brain-gcd"');
  console.log('\n\nWhich one will you choose?');
};

export const oddOrEven = () => {
  getUserName();
  console.log('This challenge is simple. If the number you see is odd say "yes", otherwise — "no".');
  const checkNum = (acc) => {
    if (acc > 2) {
      return endStatement('success');
    }
    const ranNum = randomNum();
    const userAnswer = readlineSync.question(`The number is ${ranNum}.\nYour answer: `);
    return oddOrEvenCheck(userAnswer, ranNum) === true ? checkNum(acc + 1) : endStatement('exitState');
  };
  checkNum(0);
};

export const calcGame = () => {
  getUserName();
  console.log('\nThis challenge wont be that easy! I hope you\'re ready.');
  const userMathTesting = (acc) => {
    if (acc > 2) {
      return endStatement('passed');
    }
    const num1 = randomNum();
    const num2 = randomNum();
    const operation = randomOpr();
    const userAnswer = readlineSync.question(`How much is ${num1} ${operation} ${num2}?\nYour answer: `);
    return calc(userAnswer, num1, num2, operation) === true ? userMathTesting(acc + 1) : endStatement('exitState');
  };
  return userMathTesting(0);
};

export const gcdGame = () => {
  getUserName();
  console.log('In this task you have to find the greatest common divisor. For example for the pair (15, 25) greatest common divisor would be 5. No more words. Proove yourself!');
  const userGCDTesting = (acc) => {
    if (acc > 2) {
      return endStatement('passed');
    }
    const num1 = randomNum();
    const num2 = randomNum();
    const userAnswer = readlineSync.question(`\nWhat's the greatest common divisor for ${num1} and ${num2}?\nYour answer: `);
    return gcdCheck(userAnswer, num1, num2) === true ? userGCDTesting(acc + 1) : endStatement('exitState');
  };
  return userGCDTesting(0);
};

export const balanceGame = () => {
  getUserName();
  console.log('\nIn this challenge you will need to balance a number.');
  console.log('\n\nFor example, let\'s take number 124. Balanced number would be 223. Or let\'s take 4182. Balanced number would be 3444.');
  const balancingNumber = (acc) => {
    if (acc > 2) {
      return endStatement('passed');
    }
    const num = randomNum() * 389;
    const userAnswer = readlineSync.question(`\nBalance the number ${num}.\nYour answer: `);
    return balanceTheNumber(userAnswer, num) === true ? balancingNumber(acc + 1) : endStatement('exitState');
  };
  return balancingNumber(0);
};
