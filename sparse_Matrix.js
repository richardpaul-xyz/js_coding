// Sparse Matrix - A matrix is said to be sparse if the number of zeros is more than half of the total
// elements.
arr = [
  [1,2,3],
  [0,4,0],
  [0,0,0]
]
let rows = arr.length;
let cols = arr[0].length;
let counter = 0;
for(let i = 0; i < rows; i++){
  for(let j = 0; j < cols; j++){
    if(arr[i][j] === 0){
      counter++
    }
  }
}

if(counter > parseInt((rows * cols) / 2)){
  console.log(true);
}
else{
  console.log(false)
}

