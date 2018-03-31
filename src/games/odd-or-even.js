import { gameEngine, pair } from '..';

export const randomNum = () => {
  let a = Math.random();
  while (a > 0.25 || a < 0.03) {
    a = Math.random();
  }
  return Math.floor(a * 100);
};

export const oddOrEven = (arg) => {
  const num = randomNum();
  const correct = (num % 2 === 0) ? 'yes' : 'no';
  if (arg === 'getNum') {
    return pair(num, correct);
  }
  return gameEngine(oddOrEven, '\nAnswer "yes" if the number is even otherwise answer "no".');
};
