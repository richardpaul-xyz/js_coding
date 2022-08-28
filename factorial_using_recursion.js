// Recursion is when a function calls itself until someone stops it. If no one stops it then it'll recurse (call itself) forever. 
// So it is important to add base condition like(n==0 || n== 1 return 1)
function factorial_reccur(n){
  if(n === 0 || n === 1){
    return 1;
  }
  else{
    return n * factorial_reccur(n-1);
    // return 5 * factorial_reccur(4)
    // return 4 * factorial_reccur(3)
    // return 3 * factorial_reccur(2)---> here 3 * next numbers ans
    // return 2 * factorial_reccur(1) ---> This is y base case is important. here the value will become 2 * 1
  }
}
let u = factorial_reccur(5);
console.log(u)     /* 120 */
