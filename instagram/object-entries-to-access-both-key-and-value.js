let obj = {
  name: 'Whopper',
  age: 24,
  food: ['🍔', '🍟']
};

// 👎
// Object.keys(obj).forEach((key) => {
//   const value = obj[key];
//   console.log(`${key}: ${value}`);
//   // name: Whopper
//   // age: 24
//   // food: 🍔,🍟
// });

// 👍
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
  // name: Whopper
  // age: 24
  // food: 🍔,🍟
});

console.log(Object.entries(obj)); // [ [ 'name', 'Whopper' ], [ 'age', 24 ], [ 'food', [ '🍔', '🍟' ] ] ]