let arr = [
  [1,2,3,9],
  [4,5,6,8],
  [7,8,9,7],
  [5,0,9,3],
] 

x = []
let c1 = 0;  /* first column */
let cn = arr[0].length - 1 ;  /* last column */
let r1 = 0;  /* first row */
let rn = arr.length - 1 ;  /* last row */

while(c1 <= cn && r1 <= rn){
  
  for(let i = c1; i <= cn; i++){
    x.push(arr[r1][i])
  }
  r1++
  
  for(let i = r1; i <= rn; i++){
    x.push(arr[i][cn])
  }
  cn--
  
  if(c1 <= cn && r1 <= rn){
    for(let i = cn; i >= c1; i--){
      x.push(arr[rn][i])
    }
    rn--
  }
  
  if(c1 <= cn && r1 <= rn){
    for(let i = rn; i >= r1; i--){
      x.push(arr[i][c1])
    }
    c1++
  }
  
}
console.log(x)
