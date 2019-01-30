// Input: two strings, s1 and s2
// output: true if s2 is a rotation of s1. otherwise false
// is case senstitvity important?

function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  //     Easier approach
  return (s2 + s2).includes(s1);

  //     BRUTE BRUTE FORCE APPROACH
  //     turn s1 and s2 into arrays
  //     let splitS1 = s1.split('')
  //     let splitS2 = s2.split('')

  //     for(let i = 0; i < s1.length - 1; i++){
  //         let popedVal = splitS1.shift()
  //         splitS1.push(popedVal)
  //         if(splitS1.join('') === splitS2.join('')){
  //             return true
  //         }
  //     }

  //     return false;
}

// isRotation('hello', 'elloh'); //true
// isRotation('hello','olleh') //false
// isRotation('waterbottle','erbottleawt')
