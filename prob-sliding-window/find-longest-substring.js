// add whatever parameters you deem necessary
function findLongestSubstring(str){
  
  if(str.length === 0) return 0

  let leftPoint = 0;
  let rightPoint = 1;
  let currFreqObj = {};
  let returnValue = -Infinity;


  while(leftPoint <= rightPoint && rightPoint < str.length){
      for(let i = leftPoint; i <= rightPoint; i++){
          currFreqObj[str[i]] = ((currFreqObj[str[i]]|| 0) + 1)         
      }
      let arrValues = Object.values(currFreqObj);
//         debugger;

      if(arrValues.every(function(item){
          return item === 1
      })){
          rightPoint++
          returnValue = Math.max(returnValue,arrValues.length)

      }else{
          leftPoint++
      }
      currFreqObj = {}
  }
  return returnValue;
}

module.exports = findLongestSubstring;
