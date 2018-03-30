import { performOperation, randomNum, randomOpr } from '../brainMath';
import { getUserName, gameEngine } from '..';

export const calc = (userAnswer, num1, num2, operation) => {
  const a = performOperation(num1, num2, operation);
  return a.toString() === userAnswer;
};

export const calcGame = () => {
  const userName = getUserName();
  console.log('\nThis challenge wont be that easy! I hope you\'re ready.');
  const userMathTesting = (acc) => {
    const num1 = randomNum();
    const num2 = randomNum();
    const operation = randomOpr();
    if (acc > 2) {
      return gameEngine('success', userName);
    }
    const quiz = `How much is ${num1} ${operation} ${num2}?\nYour answer: `;
    const answer = calc(gameEngine(acc, userName, quiz), num1, num2, operation);
    return answer === true ? userMathTesting(acc + 1) : gameEngine('end', userName);
  };
  return userMathTesting(0);
};
