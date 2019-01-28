// Takes a string and returns a string with the character and a number
// dictating how many times it has appeared contigiously

// Test Cases:
// compressString('aaabb') // 'a3b2'
// compressString('ccabccccc') // 'c2a1b1c5'
// compressString('abcccabcc') // 'abcccabcc'
// compressString('') // ''

function compressString(str) {
  let compressedStr = '';
  let refChar = str[0];
  let currCount = 0;
  //     iterate through the string
  for (let char of str) {
    //      if currentChar is === to referenceChar, increment count
    //      else push onto string referenceChar and count
    if (char === refChar) {
      currCount++;
    } else {
      compressedStr += `${refChar}${currCount}`;
      refChar = char;
      currCount = 1;
    }
  }
  compressedStr += `${refChar}${currCount}`;

  // check lengths to determine which to output
  //     return compressedStr;

  return compressedStr.length < str.length ? compressedStr : str;
}
