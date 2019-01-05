function countZeroes(arrOfNums) {
  // find index of last 1, then subtract length from that index
  let firstZeroIndex = findFirstZero(arrOfNums, 0, arrOfNums.length - 1)
  if(firstZeroIndex === -1) return 0;

  return arrOfNums.length - firstZeroIndex
}

function findFirstZero(arrOfNums, low, high){

  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2)
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return mid;
    } else if (arr[mid] === 1) {
      return findFirst(arr, mid + 1, high)
    }
    return findFirst(arr, low, mid - 1)
  }
  return -1;
  
  }
}

module.exports = countZeroes

countZeroes([0, 0, 0])

//     expect(countZeroes([1, 1, 1, 1, 0, 0])).toBe(2)
//     expect(countZeroes([1, 0, 0, 0, 0])).toBe(4)
//     expect(countZeroes([0, 0, 0])).toBe(3)
//     expect(countZeroes([1, 1, 1, 1])).toBe(0)