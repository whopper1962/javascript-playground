global.name = 'Eduardo';

const person = {
  name: 'Mark',
  hello: function () {
    console.log(`Hello, ${this.name}!`);
  }
};

person.hello();

const clonedFunc = person.hello;

clonedFunc();