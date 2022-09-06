// Given a 2D array , return a boolean value indicating that the given
// matrix is a diagonal matrix or not. A matrix is said to be diagonal if all
// the elements of the array other then the diagonal is 0
// If there will be zero in the diagonal then also, we will print output as
// true if all remaining cells have zero. Having zeros in diagonal does not
// affect our output


function xyz(){
  
  x = [
    [1,0,0],
    [0,5,0],
    [0,0,2]
  ]
  
  for(let i = 0; i < x.length; i++){
    for(let j = 0; j < x[i].length; j++){
      if(i !== j && x[i][j] !== 0){
        return false;
      }
    }
  }
  return true
}

c = xyz();
console.log(c)
