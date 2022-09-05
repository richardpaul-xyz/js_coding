// Shifting negative elements at the end of an array using two pointer approach

let arr = [1,2,-3,4,-5,6,-7,8];

let i = 0;
let j = arr.length-1;

while(i < j){
  while(arr[i] > 0 && i < j){
    i++
  }
  while(arr[j] < 0 && i < j){
    j--
  }

  [arr[i],arr[j]] = [arr[j], arr[i]]
  
}
console.log(arr)
