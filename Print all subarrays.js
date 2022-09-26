let arr = [1,2,3,4];
let ans = ""
for(let i = 0; i < arr.length; i++){
  for (let j = i; j < arr.length; j++){
    for(let k = i; k <= j; k++){
      ans += arr[k];
    }
  }

}

console.log(ans)
