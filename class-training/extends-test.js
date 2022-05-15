class Human {
  constructor (height, weight, birthday) {
    this.height = height;
    this.weight = weight;
    this.birthday = birthday;
  }
  mouse (something) {
    console.log(`${this.name} says "${something}".`);
  }
  ear (something) {
    console.log(`${this.name} heard ${something}`);
  }
}

class Person extends Human {
  constructor (name, height, weight, birthday) {
    super(height, weight, birthday);
    this.name = name;
  }
  speak (something) {
    super.mouse(something);
  }
}

const person = new Person('Michael', 168, 53, '1998-08-26');

console.log(person.name);
console.log(person.birthday);
console.log(person.height);
console.log(person.weight);

person.speak(`What's up guys!!`);

