// Longest Consecutive Sequence

let arr = [9,5,6,7,3,4];
arr.sort((a,b) => a - b )
let counter = 1; 
for(let i = 0; i < arr.length; i++){
  if(arr[i + 1] === arr[i] + 1){
    counter++
  }
}
console.log(counter)
