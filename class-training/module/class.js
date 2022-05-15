class Human {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  introduce () {
    console.log(`Hi, my name is ${this.name}.`);
  }
}

module.exports = {
  Human
}



