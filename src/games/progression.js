import { randomNum } from '../brainMath';
import { gameEngine, pair } from '..';

export const createArray = (newArr, step, acc, prevNum, correct) => {
  if (acc === 10) {
    return pair(newArr.join(' '), correct.toString());
  }
  if (acc === 4) {
    newArr.push('..');
    return createArray(newArr, step, acc + 1, prevNum + step, prevNum + step);
  }
  if (acc === 5) {
    newArr.push(prevNum + step);
    return createArray(newArr, step, acc + 1, prevNum + step, correct);
  }
  newArr.push(prevNum + step);
  return createArray(newArr, step, acc + 1, prevNum + step, correct);
};

export const progressionGame = (arg) => {
  const base = randomNum();
  const diff = randomNum();
  if (arg === 'start') {
    return gameEngine(progressionGame, 'What number is missing in this progression?');
  }
  return createArray([base], diff, 0, base);
};
