
function User (name, age) {
  this.name = name;
  this.age = age;
  this.talk = function (sentense) {
    console.log(sentense);
  }
}

const myUser = new User('Mark', 24);
console.log(myUser);
myUser.talk('Hello');
