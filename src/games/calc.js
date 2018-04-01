import { randomNum, randomOpr } from '../brainMath';
import { gameEngine, pair } from '..';

export const performOperation = (a, b, c) => {
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

export const calcGame = (arg) => {
  const num1 = randomNum();
  const num2 = randomNum();
  const operation = randomOpr();
  const num = `${num1} ${operation} ${num2}`;
  const correct = performOperation(num1, num2, operation);
  if (arg === 'start') {
    return gameEngine(calcGame, 'What is the result of the expression?');
  }
  return pair(num, correct.toString());
};
