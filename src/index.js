import readlineSync from 'readline-sync';

const endStatement = (arg, userName) => {
  if (arg === 'exitState') {
    return console.log('\nToo bad. Come back when you\'re ready.');
  }
  return console.log(`\nCongratulations, ${userName}`);
};

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('\nMay I have you name, please? ');
  console.log(`\nHello, ${userName}`);
  return userName;
};

export const displayOptions = () => {
  console.log('\nYou are about to start a chalenge. So far you have these options:\na) Odd or Even? To start simply type "brain-even"');
  console.log('\nb) Calculate the equation. Type "brain-calc"');
  console.log('\nc) Find The Greatest Common Divisor by typing "brain-gcd"');
  console.log('\n\nWhich one will you choose?');
};

export const gameEngine = (acc, userName, quiz) => {
  if (acc === 'success') {
    return endStatement('ha!', userName);
  } else if (acc === 'end') {
    return endStatement('exitState', userName);
  }
  const answer = readlineSync.question(quiz);
  return answer;
};
