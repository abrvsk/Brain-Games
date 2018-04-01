import { randomNum } from '../brainMath';
import { gameEngine, pair } from '..';

export const getSequence = (length) => {
  const base = randomNum();
  const diff = randomNum();
  const generateSequence = (newArr, step, acc, prevNum) => {
    if (acc === 0) {
      return newArr;
    }
    newArr.push(prevNum + step);
    return generateSequence(newArr, step, acc - 1, prevNum + step);
  };
  return generateSequence([base], diff, length, base);
};

export const progressionGame = () => {
  const sequence = getSequence(10);
  const index = Math.floor(randomNum() / 10);
  const correct = sequence[index];
  sequence[index] = '..';
  return pair(sequence.join(' '), correct.toString());
};

export const gameStart = () => gameEngine(progressionGame, 'What number is missing in this progression?');
