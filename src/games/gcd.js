import { gcd } from '../brainMath';

export default (userAnswer, num1, num2) => {
  const a = gcd(num1, num2);
  return a.toString() === userAnswer;
};
