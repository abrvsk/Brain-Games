import { randomNum } from '../brainMath';
import { gameEngine, pair } from '..';

const arrayBalancing = (array) => {
  const last = array.length - 1;
  if (Number(array[0]) === (Number(array[last]) - 1) || (array[0] === array[last])) {
    return array;
  }
  const a = Number(array[0]) + 1;
  const b = Number(array[last]) - 1;
  array.shift();
  array.unshift(a);
  array.pop();
  array.push(b);
  array.sort();
  return arrayBalancing(array);
};

export const balanceTheNumber = (num) => {
  const newNum = num.toString();
  const createArray = (str, newArray, acc) => {
    if (acc === str.length) {
      return newArray;
    }
    newArray.push(str[acc]);
    return createArray(str, newArray, acc + 1);
  };
  const items = createArray(newNum, [], 0);
  items.sort();
  arrayBalancing(items);
  return items.join('');
};

export const balanceGame = () => {
  const num = randomNum() * 389;
  const correct = balanceTheNumber(num);
  return pair(num, correct);
};

export const gameStart = () => gameEngine(balanceGame, 'Balance the given number.');
