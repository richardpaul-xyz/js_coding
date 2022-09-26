// find the pair of given element in an array such that the sum of the pair is equal to number
find the pair which is equals to n

let arr = [1,2,3,4,5] ;
let n = 5;

for(let i = 0; i < arr.length; i++){
  for(let j = i+1; j < arr.length; j++){
    // console.log(` i = ${arr[i]} j = ${arr[j]} ${arr[i] + arr[j]}`) -- used this to check weather it is covering all the number or not
    if(arr[i] +arr[j] === n){
      console.log(`[${i},${j}]`)
    }
  }
}
