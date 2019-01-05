function sortedFrequency(arrOfNums, searchNum) {
  let firstIndexOfSearch = findFirst(arrOfNums, searchNum);
  let lastIndexOfSearch = findLast(arrOfNums, searchNum);
  if (firstIndexOfSearch === -1) return -1;

  return lastIndexOfSearch - firstIndexOfSearch + 1;
}

function findFirst(arrOfNums, searchNum, low = 0, high = arrOfNums.length - 1) {
  let middleIndex = Math.floor(arrOfNums.length / 2);

  if (
    arrOfNums[middleIndex] === searchNum &&
    arrOfNums[middleIndex - 1] !== searchNum
  ){
    return middleIndex;
  }
  if(arrOfNums[low] < searchNum){
    findFirst(arrOfNums, searchNum, low + 1, middleIndex)
  }else if(arrOfNums[high] > searchNum){
    findFirst(arrOfNums,searchNum,middleIndex+1, high)
  }
}

module.exports = sortedFrequency;

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

// // divide the array until just the left and right values only contain the value
// let leftPointer = 0;
// let rightPointer = arrOfNums.length - 1;

// while(leftPointer <= rightPointer){
//   if(arrOfNums[leftPointer] === searchNum && arrOfNums[rightPointer] === searchNum){
//     return rightPointer - leftPointer + 1
//   }
//   if(arrOfNums[leftPointer] < searchNum){
//     leftPointer++
//   }
//   if(arrOfNums[rightPointer] > searchNum){
//     rightPointer--
//   }
// }
// return -1
