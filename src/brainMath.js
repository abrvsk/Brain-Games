const randomNum = () => {
  let a = Math.random();
  while (a > 0.25 || a < 0.01) {
    a = Math.random();
  }
  return Math.floor(a * 100);
};

const randomOpr = () => {
  const operators = ['+', '-', '*'];
  const str = operators[Math.floor(Math.random() * 3)];
  return str;
};

const performOperation = (a, b, c) => {
  switch (c) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

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

const balanceTheNumber = (num) => {
  const newNum = num.toString();
  const numArray = [];
  let i = 0;
  for (i; i <= newNum.length - 1; i += 1) {
    numArray.push(num[i]);
  }
  const a = Number(numArray[0]);
  const b = Number(numArray[newNum.length - 1]) - 1;
  while (a !== b || a !== b) {
    numArray[0] = a + 1;
    numArray[numArray.length - 1] = b - 1;
    numArray.sort();
  }
  return numArray.join('').toString();
};


export { randomNum, randomOpr, performOperation, gcd, balanceTheNumber };
