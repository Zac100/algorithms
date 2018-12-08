
// return first nonrpeating character in a string

function firstNonRepeat(str){

  // use a frequency counter to count the frequency of each letter and return the letter with freq of 1
     
  //    counter object 
      let countObj = {};
      let currentLetter;
  //     iterate over this string
  // for each letter in the string, if the letter is in the object, increment, else set it to one
  
      for (  let i = 0; i < str.length; i ++){
            currentLetter = str[i]
          countObj[currentLetter] = ((countObj[currentLetter] || 0)+ 1)
        
      }
  
  // iterate through the string and return the value that is equal to 1
      for ( let letter of str){
          if(countObj[letter] === 1) return letter
      }
  
  }
  

  module.exports = firstNonRepeat;

  
  