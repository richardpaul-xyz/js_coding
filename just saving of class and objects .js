// class Car {
//   constructor(type, color, length, capacity, hasAc = true){
//     //static values
//     //write all the commons here

//     this.noOfWheels = 4;
//     this.hasTintedGlass = true;
//     this.hasLeatherSeatCover = true;

//     //dynamic values
//     //write all the dynamic here
//     this.type = type;
//     this.color = color;
//     this.length = length;
//     this.capacity = capacity;
//     this.hasAc = hasAc;
    
//   }
// }

// let richardCar = new Car('good', 'blue', ' 2k cm', 8);//this means think of richardCar
// let venushaCar = new Car('ok', 'black', ' 15k cm', 4);
// let hackersCar = new Car('sedan', 'white', ' 40k cm', 4, false);
// console.log(richardCar)
// console.log(venushaCar)
// console.log(hackersCar)

class Shape{
  constructor(sides){
    this.color = 'white';
    this.border_size = '1px';
    this.border_color = 'black';
    this.sides = sides
  }
}

let triangle = new Shape(3);
console.log(triangle)


// any function inside an object is called method
