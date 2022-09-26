// Elements that occurred only once in the array problem

let arr = [3,2,1,2,3];
let n = arr.length;
let sorted_array = arr.sort();
let ans = []
for(let i = 1; i < n; i++){
  if(sorted_array[i] != sorted_array[i - 1] && sorted_array[i] != sorted_array[i + 1] ){
    ans.push(i)
  }
}

if(arr[0] != arr[1]){
  ans.push(arr[0])
} //to check the first element
else if(arr[n-1] != arr[n-2]){
  ans.push(arr[n-1])
} //to check the last element
console.log(ans)
