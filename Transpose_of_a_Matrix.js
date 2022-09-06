// Transpose of a Matrix

// refer this array this is the index number 
// [
//   x[0][0] x[0][1] x[0][2]
//   x[1][0] x[1][1] x[1][2]
//   x[2][0] x[2][1] x[2][2]
// ]


arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

for(let i = 0; i < arr.length; i++){
  for(let j = i; j < arr[i].length; j++){
    // both the for loops covers top half of the array
    [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]]  /*Swapping using destructing assignment*/
  }
  
}
console.log(arr)
