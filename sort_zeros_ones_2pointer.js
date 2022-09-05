let arr = [0,1,0,0,0,1];

let i = 0;
let j = arr.length - 1;

while(i < j){

  while(arr[i] === 0 && i < j ){
    i++;
  }
  while(arr[j] === 1 && i < j){
    j--
  }

  [arr[i], arr[j]] = [arr[j], arr[i]]
  
}
console.log(arr)
