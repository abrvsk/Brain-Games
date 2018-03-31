import { randomNum } from '../brainMath';
import { gameEngine, pair } from '..';

export const balanceTheNumber = (num) => {
  const newNum = num.toString();
  const items = [];
  let i = 0;
  for (i; i < newNum.length; i += 1) {
    items.push(newNum[i]);
  }
  const last = items.length - 1;
  items.sort();
  while (Number(items[0]) !== (Number(items[last]) - 1) && (items[0] !== items[last])) {
    items[0] = Number(items[0]) + 1;
    items[last] = Number(items[last]) - 1;
    items.sort();
  }
  return items.join('');
};

export const balanceGame = (arg) => {
  const num = randomNum() * 389;
  const correct = balanceTheNumber(num);
  if (arg === 'getNum') {
    return pair(num, correct);
  }
  return gameEngine(balanceGame, 'Balance the given number.');
};
