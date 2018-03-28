import readlineSync from 'readline-sync';
import getUserName from '..';

const randomNum = () => {
  let a = Math.random();
  while (a > 0.25 || a < 0.01) {
    a = Math.random();
  }
  return Math.floor(a * 100);
};

const randomOpr = () => {
  const operators = ['+', '-', '*'];
  const str = operators[Math.floor(Math.random() * 3)];
  return str;
};

export default () => {
  getUserName();
  console.log('\nThis challenge wont be that easy!\n\nI hope you\'re ready.');
  const endStatement = (arg) => {
    if (arg === 'exitState') {
      return console.log('\nToo bad. Come back when you\'re ready.');
    }
    return console.log('\nHmm. Well done. Let\'s see if you can pass all the challenges.');
  };
  const userMathTesting = (acc) => {
    if (acc > 2) {
      return endStatement('passed');
    }
    const num1 = randomNum();
    const num2 = randomNum();
    const operation = randomOpr();
    const performOperation = (a, b, c) => {
      switch (c) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '*':
          return a * b;
        default:
          return null;
      }
    };
    const d = performOperation(num1, num2, operation);
    const userAnswer = readlineSync.question(`How much is ${num1} ${operation} ${num2}?\nYour answer: `);
    const ansToStr = userAnswer.toString();
    return ansToStr === d.toString() ? userMathTesting(acc + 1) : endStatement('exitState');
  };
  return userMathTesting(0);
};
