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
