class Human {
  talk () {
    console.log('Talk');
    return this;
  }
  walk () {
    console.log('Walk');
    return this;
  }
  eat () {
    console.log('Eat');
    return this;
  }
}

const human = new Human();

// human.talk();
// human.walk();
// human.eat();

human.talk().walk().eat();

