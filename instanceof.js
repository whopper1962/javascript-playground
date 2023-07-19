
class Human {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
}

class Mutant extends Human {
  constructor (name, age) {
    super(name, age);
  }
}

const human = new Human('Steve', 24);
console.log(human instanceof Human); // true
console.log(human instanceof Mutant); // false

const mutant = new Mutant('Logan', 43);
console.log(mutant instanceof Human); // true
console.log(mutant instanceof Mutant); // true

