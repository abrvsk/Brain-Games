import { gameEngine, pair } from '..';
import { randomNum, gcd } from '../brainMath';

export const gcdGame = () => {
  const num1 = randomNum();
  const num2 = randomNum();
  const correct = gcd(num1, num2);
  const num = `${num1} ${num2}`;
  return pair(num, correct.toString());
};

export const gameStart = () => gameEngine(gcdGame, 'Find the greatest common divisor of given numbers.');
