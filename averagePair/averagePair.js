function averagePair(arr,expAvg){

  let leftPoint = 0;
  let rightPoint = arr.length-1;
  let leftValue;
  let rightValue;

  if(arr.length === 0 ) return false;
//     while left !== right loop
  while(leftPoint !== rightPoint){
      leftValue = arr[leftPoint];
      rightValue = arr[rightPoint];
      currAvg = (leftValue + rightValue )/2
      debugger;
      if (currAvg === expAvg){
          return true;
      } else if(currAvg < expAvg){
          leftPoint++
      } else if( currAvg > expAvg){
          rightPoint--
      }

  }
  
  return false;
}

module.exports = averagePair;

