import readlineSync from 'readline-sync';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('\nMay I have you name, please? ');
  console.log(`\nNice to meet you, ${userName}`);
};

export const truthCheck = () => {
  console.log('\nBefore we start I want to know what kind of person you are.\n\nYour first challenge is simple. If the number you see is odd say "yes", otherwise — "no".');
  const result = (arg) => {
    if (arg === 'exitState') {
      return console.log('\nToo bad. Come back when you\'re ready.');
    }
    return console.log('\nHmm. Very well. Let\'s see if you can pass all the challenges.');
  };
  const enterState = () => {
    const first = readlineSync.question('\nAre you ready? ');
    return first === 'yes' ? firstNum() : result('exitState');
  };
  const firstNum = () => {
    const num1 = readlineSync.question('\nLet\s start then.\nThe first number is 15.\nYour answer is ');
    return num1 === 'yes' ? secondNum() : result('exitState');
  };
  const secondNum = () => {
    const num2 = readlineSync.question('\nOkay. Next number is 22.\nYour answer is ');
    return num2 === 'no' ? thirdNum() : result('exitState');
  };
  const thirdNum = () => {
    const num3 = readlineSync.question('\nGood. Last number is 1689613.\nYour answer is ');
    return num3 === 'yes' ? result('succesState') : result('exitState');
  };
  enterState();
};
