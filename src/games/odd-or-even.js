import { gameEngine, pair } from '..';
import { randomNum } from '../brainMath';

export const oddOrEven = () => {
  const num = randomNum();
  const correct = (num % 2 === 0) ? 'yes' : 'no';
  return pair(num, correct);
};

export const gameStart = () => gameEngine(oddOrEven, 'Answer "yes" if the number is even otherwise answer "no".');
