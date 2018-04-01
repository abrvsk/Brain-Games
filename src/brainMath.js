const randomNum = () => {
  let a = Math.random();
  while (a > 0.99 || a < 0.01) {
    a = Math.random();
  }
  return Math.floor(a * 100);
};

const randomOpr = () => {
  const operators = ['+', '-', '*'];
  const str = operators[Math.floor(Math.random() * 3)];
  return str;
};

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

export { randomNum, randomOpr, gcd };
