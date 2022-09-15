class Animal {
  constructor (name, age) {
    this.name = name;
    this.age = age;
    if (this.constructor == Animal) {
      throw new Error("Can't create an instance of Abstract class.");
    }
  }

  makeSound () {
    throw new Error("Abstract class doesn't have an implementation.");
  }
}

class Dog extends Animal {
  constructor (name, age, weight) {
    super(name, age);
    this.weight = weight;
  }

  // makeSound () {
  //   console.log(`woof`);
  // }
}

const myDog = new Dog('Rex', 2, '6kg');
myDog.makeSound(); // Abstract class doesn't have an implementation.

const myAnimal = new Animal('Whopper', 5); // Can't create an instance of Abstract class.

// const myCat = new Cat('Rex', 4, 'German Sh.');
