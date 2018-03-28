import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('\nMay I have you name, please? ');
  console.log(`\nNice to meet you, ${userName}`);
};
