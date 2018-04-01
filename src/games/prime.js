import { gameEngine, pair } from '..';
import { randomNum } from '../brainMath';

const isPrime = (numToCheck) => {
  const primeCheck = (num, acc) => {
    if (acc > num / 2) {
      return true;
    }
    if (num % acc === 0) {
      return false;
    }
    return primeCheck(num, acc + 1);
  };
  return primeCheck(numToCheck, 2);
};

export const primeGame = () => {
  const num = randomNum();
  const correct = isPrime(num) ? 'yes' : 'no';
  return pair(num, correct);
};

export const gameStart = () => gameEngine(primeGame, 'What number is missing in this progression?');
