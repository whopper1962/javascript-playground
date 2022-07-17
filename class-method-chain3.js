class Human {
  response = {
    url: 'http://hehehe' // axiosのインターセプターでここを変えている
  };
  status = 400; // axiosのインターセプターでここを変えている
  talk (callback) {
    if (this.status !== 200) {
      return this;
    }
    callback(this.response);
    return this;
  }
  walk (callback) {
    if (this.status !== 300) {
      return this;
    }
    callback(this.response);
    return this;
  }
  eat (callback) {
    if (this.status !== 400) {
      return this;
    }
    callback(this.response);
    return this;
  }
}

const human = new Human();

human.talk((res) => {
  console.log('Talk');
  console.log(res);
}).walk((res) => {
  console.log('Walk');
  console.log(res);
}).eat((res) => {
  console.log('Eat');
  console.log(res);
});

