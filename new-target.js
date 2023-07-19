class Human {
  constructor (name, food) {
    this.name = name;
    this.food = food;
    if (new.target === Human) {
      console.log(new.target, 'SuperClass🍎');
    } else {
      console.log(new.target, 'SubClass🍏');
    }
  }
}

class Mutant extends Human {
  constructor (name, food) {
    super(name, food);
  }
}

const human = new Human('Jack', '🍔'); // [class Human] SuperClass🍎
const mutant = new Mutant('Logan', '🥩'); // [class Mutant extends Human] SubClass🍏
