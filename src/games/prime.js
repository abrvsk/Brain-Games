import { gameEngine, pair } from '..';

export const randomNum = () => {
  let a = Math.random();
  while (a > 0.99 || a < 0.01) {
    a = Math.random();
  }
  return Math.floor(a * 100);
};

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

export const primeGame = (arg) => {
  const num = randomNum();
  const correct = isPrime(num) ? 'yes' : 'no';
  if (arg === 'start') {
    return gameEngine(primeGame, 'Answer "yes" if the number is prime otherwise answer "no".');
  }
  return pair(num, correct);
};
