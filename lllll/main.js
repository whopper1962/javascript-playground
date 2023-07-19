class Human {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  hello () {
    console.log(`Hello, ${this.name}`);
  }
}

// const Human = function (name, age) {
//   this.name = name;
//   this.age = age;
// }
// Human.prototype.hello = function () {
//   console.log(`Hello, ${this.name}`);
// }

// const person1 = new Human('Masashi', 44);
// console.log(person1);
// person1.hello();

// const person2 = new Human('Yuna', 24);
// console.log(person2);
// person2.hello();
