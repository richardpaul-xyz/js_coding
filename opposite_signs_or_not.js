// Given 2 numbers as input. You need to find if they have opposite signs or not.
// Math.abs() is used to convert a number to positive number
x = -10;
y = 11580;

pos_x = Math.abs(x);
pos_y = Math.abs(y)

neg_x = pos_x * -1;
neg_y = pos_y * -1;

if(pos_x === x && pos_y === y){
  console.log(false);
}
else if(neg_x === x && neg_y === y){
  console.log(false);
}
else{
  console.log(true);
}
