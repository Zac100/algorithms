// add whatever parameters you deem necessary
function minSubArrayLen(arr, num){
  let leftPoint = 0;
  let rightPoint = 1;
  let returnLength = Infinity;
  let currSum = 0;

  while(leftPoint <= rightPoint && rightPoint < arr.length){
      for(let i = leftPoint; i <= rightPoint; i++){
          currSum += arr[i]
      }
      if(currSum < num){
          rightPoint++
      }
      if(currSum >= num){
          returnLength = Math.min(returnLength,(rightPoint - leftPoint + 1))
          leftPoint++
      }

      currSum = 0;
  }
  if(returnLength === Infinity) return 0

  return returnLength;
}

module.exports = minSubArrayLen;
