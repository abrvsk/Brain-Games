import { randomNum } from '../brainMath';
import { gameEngine, pair } from '..';

export const createArray = (newArr, step, acc, prevNum) => {
  if (acc === 10) {
    return newArr;
  }
  newArr.push(prevNum + step);
  return createArray(newArr, step, acc + 1, prevNum + step);
};

export const progressionGame = () => {
  const base = randomNum();
  const diff = randomNum();
  const sequence = createArray([base], diff, 0, base);
  const index = Math.floor(randomNum() / 10);
  const correct = sequence[index];
  sequence[index] = '..';
  return pair(sequence.join(' '), correct.toString());
};

export const gameStart = () => gameEngine(progressionGame, 'What number is missing in this progression?');
