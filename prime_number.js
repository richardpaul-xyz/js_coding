function prime_number(num){
  
  if(num <=1){
    return false
  } 
  else if(num === 2){
    return true;
  }

  
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      return false;
    } 
    // if you put return true in else place then the loop only check with 2 and returns the answer so i putted outside the loop
  }
  return true;
}
check = prime_number(87);
console.log(check)
