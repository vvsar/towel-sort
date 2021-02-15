

module.exports = function towelSort (A = []) {
  let m = A.length;
  //create target array
  let B = [];  
  for (let i = 0; i < m; i++) {
    let n = A[i].length;
    if (i % 2 === 0) {
        //for even elements: direct order
      for (let j = 0; j < n; j++) {
        B.push(A[i][j]);
      }
    } else {
        //for odd elements: reverse order
      for (let j = n - 1; j >= 0; j--) {
        B.push(A[i][j]);
      }
    }
  }  
  return B;
}
