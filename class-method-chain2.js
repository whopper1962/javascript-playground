class Human {
  status = 400;
  talk (callback) {
    if (this.status !== 200) {
      return this;
    }
    callback();
    return this;
  }
  walk (callback) {
    if (this.status !== 300) {
      return this;
    }
    callback();
    return this;
  }
  eat (callback) {
    if (this.status !== 400) {
      return this;
    }
    callback();
    return this;
  }
}

const human = new Human();

human.talk(() => {
  console.log('Talk');
}).walk(() => {
  console.log('Walk');
}).eat(() => {
  console.log('Eat');
});

