import readlineSync from 'readline-sync';
import { randomNum, randomOpr, performOperation, endStatement } from '../brainMath';

export default () => {
  console.log('\nThis challenge wont be that easy!\n\nI hope you\'re ready.');
  const userMathTesting = (acc) => {
    if (acc > 2) {
      return endStatement('passed');
    }
    const num1 = randomNum();
    const num2 = randomNum();
    const operation = randomOpr();
    const d = performOperation(num1, num2, operation);
    const userAnswer = readlineSync.question(`How much is ${num1} ${operation} ${num2}?\nYour answer: `);
    const ansToStr = userAnswer.toString();
    return ansToStr === d.toString() ? userMathTesting(acc + 1) : endStatement('exitState');
  };
  return userMathTesting(0);
};
