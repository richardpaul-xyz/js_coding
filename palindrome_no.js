function palindrome(y){
  x = y.toString();
  length = (x.length)-1;
  let storage = []
  for(let i = length; i >= 0; i--){
    storage += x[i];
  }
  (x === storage) ? console.log(true) : console.log(false)
}

palindrome("ror")

// Other Method

// for (let num = 0; num <= 50; num++){
//   let reveresed_string = num.toString().split('').reverse().join('')
//   let reveresed_int = parseInt(reveresed_string)
//   if(reveresed_int === num){
//     console.log(num)
//   }
// }
