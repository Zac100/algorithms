function isSubsequence(str1, str2){

  let point1 = 0;
  let point2 = 0;

  let str1Value;
  let str2Value;

  while (true){
      str1Value = str1[point1];
      str2Value = str2[point2];

      if(str1Value === str2Value){
          point1++;
          point2++;
      }else{
          point2++;
      }

      if(point1 > str1.length) return true;

      if(point2 > str2.length) return false;

  }

}


module.exports = isSubsequence;
