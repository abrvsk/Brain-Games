import { balanceTheNumber, randomNum } from '../brainMath';
import { gameEngine, getUserName } from '..';

const balanceCheck = (userAnswer, number) => {
  const a = balanceTheNumber(number);
  return a === userAnswer;
};

export default () => {
  const userName = getUserName();
  console.log('\nIn this challenge you will need to balance a number.');
  console.log('\n\nFor example, let\'s take number 124. Balanced number would be 223. Or let\'s take 4182. Balanced number would be 3444.');
  const balancingNumber = (acc) => {
    const num = randomNum() * 389;
    if (acc > 2) {
      return gameEngine('success', userName);
    }
    const quiz = `\nBalance the number ${num}.\nYour answer: `;
    const answer = balanceCheck(gameEngine(acc, userName, quiz), num);
    return answer === true ? balancingNumber(acc + 1) : gameEngine('end', userName);
  };
  return balancingNumber(0);
};

