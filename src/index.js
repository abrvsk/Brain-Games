import readlineSync from "readline-sync";

console.log('Welcome to the Brain Games!');
console.log('');

const userName = readlineSync.question('May I have you name? ');
console.log('');
console.log(`Nice to meet you, ${userName}`);
console.log('');