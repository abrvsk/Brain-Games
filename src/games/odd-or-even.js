import { randomNum } from '../brainMath';
import { gameEngine, getUserName } from '..';

const oddOrEvenCheck = (userAnswer, ranNum) => {
  if ((ranNum % 2 !== 0 && userAnswer === 'yes') || (ranNum % 2 === 0 && userAnswer === 'no')) {
    return true;
  }
  return false;
};

export default () => {
  const userName = getUserName();
  const func = (acc) => {
    const ranNum = randomNum();
    if (acc > 2) {
      return gameEngine('success', userName);
    }
    if (acc === 0) {
      const quiz = `If number is odd say "yes", otherwise "no".\n\nThe number is ${ranNum}.\nYour answer: `;
      const answer = oddOrEvenCheck(gameEngine(acc, userName, quiz), ranNum);
      return answer === true ? func(acc + 1) : gameEngine('end', userName);
    }
    const quiz2 = `Correct!\n\nNext number is ${ranNum}.\nYour answer: `;
    const answer2 = oddOrEvenCheck(gameEngine(acc, userName, quiz2), ranNum);
    return answer2 === true ? func(acc + 1) : gameEngine('end', userName);
  };
  return func(0);
};
