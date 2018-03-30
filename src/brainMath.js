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
  const items = [];
  let i = 0;
  for (i; i < newNum.length; i += 1) {
    items.push(newNum[i]);
  }
  const last = items.length - 1;
  items.sort();
  while (Number(items[0]) !== (Number(items[last]) - 1) && (items[0] !== items[last])) {
    items[0] = Number(items[0]) + 1;
    items[last] = Number(items[last]) - 1;
    items.sort();
  }
  return items.join('');
};


export { randomNum, randomOpr, performOperation, gcd, balanceTheNumber };
