// Find the largest number from the two number
function greatest(num1, num2){
  if (num1 > num2){
    g = num1;
    return g;
  }
  else{
    g = num2;
    return g;
  }
}

function lcm(num1, num2){
  g = greatest(num1,num2);
  // See if g is divided by both a and b completely 
  // If yes then g is you LCM
  // else increase the g until g is divisible by both a and b
  while(true){
    if(g % num1 === 0 && g % num2 === 0){
      console.log(`the LCM is : ${g}`);
      break;
    }
    else{
      g++
    }
  }
}

lcm(10,5)
