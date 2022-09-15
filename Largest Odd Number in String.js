// Largest Odd Number in String
let num = '2476'


function check(){
  let output = ''
  
  if(num % 2 !== 0){
    return num
  }
  
  while(num){
    let single_digit = num % 10;
    num = parseInt(num / 10)
    if(single_digit % 2 !== 0){
      output += single_digit;
    }
    // else{
    //   output = `""`
    // }
  }
  if(output > 10){
    let x = output.split('');
    return Math.max(...x)  //using spread operator
  }
  
  return output
  
}
console.log(check())


