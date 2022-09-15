module.exports = class Human {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  mouse (sentense) {
    console.log(`${this.name}: "${sentense}".`);
  }
}