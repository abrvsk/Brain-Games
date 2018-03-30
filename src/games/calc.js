import { performOperation } from '../brainMath';

export default (userAnswer, num1, num2, operation) => {
  const a = performOperation(num1, num2, operation);
  return a.toString() === userAnswer;
};
