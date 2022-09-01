let arr = [-1,2,-3,4,5,6,-7,8,9]
let neg = [];
let pos = [];
arr.forEach((val) => val > 0 ? pos.push(val) : neg.push(val))
let final = pos.concat(neg);
console.log(final)

