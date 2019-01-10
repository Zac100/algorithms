// Link: https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
  //     create frequency counter for the ar
  // loop over the object
  // math.floor value divided by 2, add that to counter
  // return counter

  let counter = 0;
  let freqObj = {};

  for (let val of ar) {
    freqObj[val] = (freqObj[val] || 0) + 1;
  }
  for (let key in freqObj) {
    counter += Math.floor(freqObj[key] / 2);
  }

  return counter;
}

sockMerchant(9, [10, 20, 20, 10, 10, 10, 10, 10, 20]);
