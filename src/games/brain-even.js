import readlineSync from 'readline-sync';
import { endStatement, checkNum } from '../brainMath';

export default () => {
  console.log('\nBefore we start I want to know what kind of person you are.\n\nYour first challenge is simple. If the number you see is odd say "yes", otherwise — "no".');
  const enterState = () => {
    const first = readlineSync.question('\nAre you ready? ');
    return first === 'yes' ? checkNum(0) : endStatement('exitState');
  };
  enterState();
};
