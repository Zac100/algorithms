// Runtime: O(N^2)
function pascalsTriangle(numRows) {
  let returnArray = [[1]];
  if (numRows === 0) return returnArray;

  let tempArr = [1];

  for (let i = 2; i <= numRows; i++) {
    //         debugger;
    if (i == 2) {
      returnArray.push([1, 1]);
    } else {
      for (let k = 1; k < i - 1; k++) {
        tempArr.push(returnArray[i - 2][k - 1] + returnArray[i - 2][k]);
      }
      tempArr.push(1);
      returnArray.push(tempArr);
      tempArr = [1];
    }
  }

  return returnArray;
}

module.exports = pascalsTriangle