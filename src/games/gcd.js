import { gameEngine, getUserName } from '..';
import { randomNum, gcd } from '../brainMath';

const gcdCheck = (userAnswer, num1, num2) => {
  const a = gcd(num1, num2);
  return a.toString() === userAnswer;
};

export default () => {
  const userName = getUserName();
  console.log('In this task you have to find the greatest common divisor. For example for the pair (15, 25) greatest common divisor would be 5. No more words. Proove yourself!');
  const userGCDTesting = (acc) => {
    const num1 = randomNum();
    const num2 = randomNum();
    if (acc > 2) {
      return gameEngine('success', userName);
    }
    const quiz = `\nQuestion: ${num1} and ${num2}?\nYour answer: `;
    const answer = gcdCheck(gameEngine(acc, userName, quiz), num1, num2);
    return answer === true ? userGCDTesting(acc + 1) : gameEngine('end', userName);
  };
  return userGCDTesting(0);
};
