function selfDividngNumber(left, right) {
  let returnArr = [];

  for (let i = 1; i <= right; i++) {
    if (isSelfDivisable(i)) {
      returnArr.push(i);
    }
  }

  return returnArr;
}

function isSelfDivisable(num) {
  let numArr = num.toString().split('');
  //     debugger;
  for (let digit of numArr) {
    if (num % digit !== 0) {
      return false;
    }
  }
  return true;
}
