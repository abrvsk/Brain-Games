import readlineSync from 'readline-sync';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('\nMay I have you name, please? ');
  console.log(`\nNice to meet you, ${userName}`);
};

export const truthCheck = () => {
  console.log('\nBefore we start I want to know what kind of person you are.\n\nYour first challenge is simple. If the number you see is odd say Yes, otherwise — No.');
  const result = (arg) => {
    if (arg === 'exitState') {
      return console.log('\nToo bad. Come back when you\'re ready.');
    }
    return console.log('\nHmm. Very well. Let\'s see if you can pass all the challenges.');
  };
  const enterState = () => {
    const first = readlineSync.question('\nAre you ready? ');
    if (first === 'yes' || first === 'Yes' || first === 'YES' || first === 'y') {
      return firstNum();
    }
    return result('exitState');
  };
  const firstNum = () => {
    const num1 = readlineSync.question('\nFirst number is 15: ');
    if (num1 === 'yes' || num1 === 'Yes' || num1 === 'YES' || num1 === 'y' || num1 === 'Y') {
      return secondNum();
    }
    return result('exitState');
  };
  const secondNum = () => {
    const num2 = readlineSync.question('\nOkay. Next number is 22: ');
    if (num2 === 'no' || num2 === 'No' || num2 === 'NO' || num2 === 'n' || num2 === 'N') {
      return thirdNum();
    }
    return result('exitState');
  };
  const thirdNum = () => {
    const num3 = readlineSync.question('\nGood. Last number is 1689613: ');
    if (num3 === 'yes' || num3 === 'Yes' || num3 === 'YES' || num3 === 'y' || num3 === 'Y') {
      return result('succesState');
    }
    return result('exitState');
  };
  enterState();
};
