export default (userAnswer, ranNum) => {
  if ((ranNum % 2 !== 0 && userAnswer === 'yes') || (ranNum % 2 === 0 && userAnswer === 'no')) {
    return true;
  }
  return false;
};
