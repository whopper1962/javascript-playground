class Human {
  constructor (height, weight) {
    this.height = height;
    this.weight = weight;
  }
  mouse (sentence) {
    console.log(`${this.name}: "${sentence}"`);
  }
  override () {
    console.log(`Hello.`);
  }
}

class Person extends Human {
  constructor (name, age, height, weight) {
    super(height, weight);
    this.name = name;
    this.age = age;
  }
  talk (sentence) {
    super.mouse(sentence);
  }
  override () {
    console.log(`Let's go!`);
  }
}

const mark = new Person('Mark', 23, 168, 65);

mark.override(); // Let's go!

