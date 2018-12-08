function freqCounter(num) {
  let freqObj = {};
  let currValue;
  num = num.toString();

  for (let i = 0; i < num.length; i++) {
    currValue = num[i];

    freqObj[currValue] = (freqObj[currValue] || 0) + 1;
  }
  return freqObj;
}

function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();

  //     early exit if two values are different lengths
  if (num1.length !== num2.length) return false;

  //     make freq counter for each num1
  num1FreqCounter = freqCounter(num1);
  num2FreqCounter = freqCounter(num2);

  // iterate through the num1, if that key value pair doesn't exist, return false
  for (let i = 0; i < num1.length; i++) {
    currValue1 = num1FreqCounter[num1[i]];
    currValue2 = num2FreqCounter[num1[i]];
    if (currValue1 !== currValue2) {
      return false;
    }
  }

  return true;
}


module.exports = sameFrequency, freqCounter;
