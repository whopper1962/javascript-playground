function User (name, food) {
  this.name = name;
  this.food = food;
}

let user = new User('Jack', '🍔');
console.log(user); // User { name: 'Jack', food: '🍔' }

// let user = User('Jack', '🍔');
// console.log(user); // undefined