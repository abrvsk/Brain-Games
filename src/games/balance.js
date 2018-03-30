import { balanceTheNumber } from '../brainMath';

export default (userAnswer, number) => {
  const a = balanceTheNumber(number);
  return a.toString() === userAnswer;
};
