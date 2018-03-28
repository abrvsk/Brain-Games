import readlineSync from 'readline-sync';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('\nMay I have you name? ');
  console.log(`\nNice to meet you, ${userName}`);
};
