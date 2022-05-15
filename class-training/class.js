class Human {
  constructor (name, age, foods) {
    this.name = name;
    this.age = age;
    this.foods = foods;
  }
}

class Food {
  constructor(food1, food2) {
    this.food1 = food1;
    this.food2 = food2;
  }
}

// const foods = new Food('🍔', '🍟');

const human = new Human('Jack', 23, '🍎', '🍟');

console.log(human.foods);