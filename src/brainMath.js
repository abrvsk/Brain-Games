const randomNum = () => {
  let a = Math.random();
  while (a > 0.25 || a < 0.03) {
    a = Math.random();
  }
  return Math.floor(a * 100);
};

const randomOpr = () => {
  const operators = ['+', '-', '*'];
  const str = operators[Math.floor(Math.random() * 3)];
  return str;
};

export { randomNum, randomOpr };
