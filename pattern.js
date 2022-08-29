

string2 = ""
for(let i = 1; i <= 20; i++){
  for(let j = 1; j <= i; j++){
    if(i % 2 === 0){
      string2 += "-";
    }
    else{
      string2 += "*";
    }
    
  }
  string2 += "\n"
}
console.log(string2)

// string = ""
// for(let i = 5; i >= 1; i--){
//   for(let j = 1; j <= i; j++){
//     string += "*";
//   }
//   string += "\n"
// }
// console.log(string)
