// Print in wave form

arr = [
       [1,2,3,4],
       [5,6,7,8],
       [9,1,2,3]
      ]

rows = arr.length - 1;
cols = arr[0].length - 1;

var result = []
for(let i = 0; i <= cols; i++){
  if(i % 2 === 0){
    for(let j = 0; j <= rows; j++){
      result.push(arr[j][i])
    }
  }
  else{
    for(let j = rows; j >= 0; j--){
      result.push(arr[j][i])
    }
  }
  
}

  
console.log(result) /* --> [1,5,9,1,6,2,3,7,2,3,8,4] */
