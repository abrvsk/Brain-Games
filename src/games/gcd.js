import { gameEngine, pair } from '..';
import { randomNum } from '../brainMath';

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

export const gcdGame = (arg) => {
  const num1 = randomNum();
  const num2 = randomNum();
  const correct = gcd(num1, num2);
  const num = `${num1} ${num2}`;
  if (arg === 'start') {
    return gameEngine(gcdGame, 'Find the greatest common divisor of given numbers.');
  }
  return pair(num, correct.toString());
};
