function cube(y){
  return y * y * y
}

function armstrong_num(num){
  
  temp_num = num;
  sum = 0
  while(temp_num){
    single_digit = temp_num % 10;
    cube_of_digit = cube(single_digit); 
    sum += cube_of_digit 
    temp_num = parseInt(temp_num/10)
  }
  if(sum == num){
    console.log(`${num} is a Armstrong number`)
  } 
  else{
    console.log(`${num} is a Not an Armstrong number`)
  }
}

armstrong_num(121)
