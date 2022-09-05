// Cyclically Rotate Array by 1

arr = [ 1,2,3,4,5 ];
let i = 0;
let j = arr.length-1;

while(i < j){
  [ arr[i],arr[j] ] = [ arr[j],arr[i] ];
  i++
}
console.log(arr)

// Examples:
// [1,2,3,4,5]
// [5,2,3,4,1]
// [5,1,3,4,2]
// [5,1,2,4,3]
// [5,1,2,3,4]
