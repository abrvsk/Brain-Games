import readlineSync from 'readline-sync';
import { randomNum } from '../brainMath';

const endStatement = (arg) => {
  if (arg === 'exitState') {
    return console.log('\nToo bad. Come back when you\'re ready.');
  }
  return console.log('\nHmm. Well done. Let\'s see if you can pass all the challenges.');
};

export default () => {
  console.log('\nYou\'ve done very well so far.\nKeep going, young padavan. Let The Force be with you!\n\nIn this task you have to find the greatest common divisor. For example for the pair (15, 25) greatest common divisor would be 5. No more words. Proove yourself!');
  const userGCDTesting = (acc) => {
    if (acc > 2) {
      return endStatement('passed');
    }
    const num1 = randomNum();
    const num2 = randomNum();
    const gcd = (x, y) => {
      const a = x > y ? x : y;
      const b = a === x ? y : x;
      let result;
      let i = 1;
      for (i; i <= b;) {
        while (i <= b) {
          if (a % i === 0 && b % i === 0) {
            result = i;
          }
          i += 1;
        }
      }
      return result;
    };
    const d = gcd(num1, num2);
    const userAnswer = readlineSync.question(`What's the greatest common divisor for ${num1} and ${num2}?\nYour answer: `);
    const ansToStr = userAnswer.toString();
    return ansToStr === d.toString() ? userGCDTesting(acc + 1) : endStatement('exitState');
  };
  return userGCDTesting(0);
};
