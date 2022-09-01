arr = [0,0,1,1,1,0,1,0];
zero_count = []
one_count = []
arr.forEach((val) => val === 0 ? zero_count.push(val) : one_count.push(val));
final = zero_count.concat(one_count);
console.log(final)


