import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('\nMay I have you name, please? ');
  console.log(`\nNice to meet you, ${userName}`);
};

export const displayOptions = () => {
  console.log('\nYou are about to start a chalenge. So far you have these options:\na) Odd or Even? To start simply type "brain-even"');
  console.log('\nb) Calculate the equation. Type "brain-calc"');
  console.log('\nc) Find The Greatest Common Divisor by typing "brain-gcd"');
  console.log('\n\nWhich one will you choose?');
};
