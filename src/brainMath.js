import readlineSync from 'readline-sync';

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

const endStatement = (arg) => {
  if (arg === 'exitState') {
    return console.log('\nToo bad. Come back when you\'re ready.');
  }
  return console.log('\nHmm. Well done. Let\'s see if you can pass all the challenges.');
};

const checkNum = (acc) => {
  if (acc === 0) {
    const num1 = readlineSync.question('\nLet\'s start then.\nThe first number is 15.\nYour answer is ');
    return num1 === 'yes' ? checkNum(acc + 1) : endStatement('exitState');
  } else if (acc === 1) {
    const num2 = readlineSync.question('\nOkay. Next number is 22.\nYour answer is ');
    return num2 === 'no' ? checkNum(acc + 1) : endStatement('exitState');
  }
  const num3 = readlineSync.question('\nGood. Last number is 1689613.\nYour answer is ');
  return num3 === 'yes' ? endStatement('succesState') : endStatement('exitState');
};

export { randomNum, randomOpr, performOperation, endStatement, checkNum };
