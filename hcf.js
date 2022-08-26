let num1 = 60;
let num2 = 72;
let temp = 0 
let remainder = 0;

while(true){
  if (num1 >= num2){
    if(num1 % num2 > 0){
      remainder = num1 % num2;
      num1 = num2;
      num2 = remainder;
    }
    else if(num1 % num2 == 0){
      console.log(`hcf is ${num2}`);
      break;
    }
  }
  else if(num1 < num2){
    temp = num1;
    num1 = num2;
    num2 = temp;
  }
}


// divide the larger number by the smaller Number
// if divisor gives a remainder then repeat with new remainder
// if remainder == 0 then divident is the hcf
