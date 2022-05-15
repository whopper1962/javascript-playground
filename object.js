class Human {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  hello () {
    console.log(`Hello, i'm ${this.name}.`);
  }
}


const human = new Human('Riko', 31);
const human2 = new Human('Masashi', 32);
// console.log(human);

// console.log(human.name); // 

// const human = {
//   name: 'Riko',
//   age: 31
// };

// const human2 = {
//   name: 'Masashi',
//   age: 32
// };

console.log(human);
console.log(human2);