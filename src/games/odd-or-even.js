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
  if (arg === 'start') {
    return gameEngine(oddOrEven, 'Answer "yes" if the number is even otherwise answer "no".');
  }
  return pair(num, correct);
};
