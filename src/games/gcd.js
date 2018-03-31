import { gameEngine, pair } from '..';
import { randomNum } from '../brainMath';

export const gcd = (x, y) => {
  const a = x > y ? x : y;
  const b = a === x ? y : x;
  let result;
  let i = 1;
  for (i; i <= b;) {
    while (i <= b) {
      if (a % i === 0 && b % i === 0) {
        result = i;
      }
      i += 1;
    }
  }
  return result;
};

export const gcdGame = (arg) => {
  const num1 = randomNum();
  const num2 = randomNum();
  const correct = gcd(num1, num2);
  const num = `${num1} ${num2}`;
  if (arg === 'getNum') {
    return pair(num, correct.toString());
  }
  return gameEngine(gcdGame, 'Find the greatest common divisor of given numbers.');
};
