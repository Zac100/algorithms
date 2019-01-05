function findRotatedIndex(arr,num, low=0, high=arr.length - 1) {
  // the max number is where the breakpoint is
  let midIndex = Math.floor(arr.length / 2)

  if(arr[midIndex] === num) return midIndex

  if(arr[midIndex] < num){
    findRotatedIndex(arr,num,low,midIndex - 1)
  }else{
    findRotatedIndex(arr,num,midIndex + 1, high)
  }
}

module.exports = findRotatedIndex

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1