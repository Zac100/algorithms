// Given an MxN matrix, identify if an element is equal to zero and set its rows and columns equal to zero

// Test Cases:
// zeroMatrix([[0,1,1],[1,1,1],[1,1,1]])
// [1,0,1],[0,0,0],[1,0,1]]

function zeroMatrix(matrix) {
  // identify the y and x position of the zero
  let y;
  let x;

  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k] === 0) {
        y = i;
        x = k;
      }
    }
  }
  // reiterate over the array and fill in the zeros

  //     Handle y
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][y] = 0;
  }
  // Handle x
  for (let i = 0; i < matrix[x].length; i++) {
    matrix[x][i] = 0;
  }
  return matrix;
}
