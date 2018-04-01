import readlineSync from 'readline-sync';

export const pair = (x, y) => f => f(x, y);

export const head = f => f(x => x);
export const tail = f => f((x, y) => y);

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
  console.log('\nd) Balance The Number by typing "brain-balance"');
  console.log('\ne) Arithmetic Progression "brain-progression"');
  console.log('\n\nWhich one will you choose?');
};

export const gameEngine = (gameName, startPhrase) => {
  const userName = getUserName();
  console.log(`\n${startPhrase}`);
  const roundCounter = (acc) => {
    if (acc > 2) {
      return endStatement('ha!', userName);
    }
    const data = gameName('getNum');
    const arg = head(data);
    const answer = tail(data);
    const question = readlineSync.question(`\nQuestion: ${arg}.\nYour answer: `);
    return (question !== answer) ? endStatement('exitState') : (console.log('Correct!'), roundCounter(acc + 1));
  };
  roundCounter(0);
};
