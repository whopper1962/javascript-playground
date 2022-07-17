// deleteを使ってオブジェクトをそのまま操作するのはよくない
// 元のオブジェクトをコピーして、コピーからプロパティを消す方が良い

// 👎
// let currentObj = {
//   age: 20,
//   name: 'Mark',
//   food: '🍔'
// };

// delete currentObj.age;
// delete currentObj.food;

// console.log(currentObj); // { name: 'Mark' }

// 👍
// const currentObj = {
//   age: 20,
//   name: 'Mark',
//   food: '🍔'
// };

// const {age, food, ...newObj} = currentObj;

// console.log(currentObj); // { age: 20, name: 'Mark', food: '🍔' }
// console.log(newObj); // { name: 'Mark' }

// console.log(age); // 20 意味のない変数が定義されてしまう
// console.log(food); // 🍔 意味のない変数が定義されてしまう

// 👍👍
const currentObj = {
  age: 20,
  name: 'Mark',
  food: '🍔'
};

const newObj = (({age, food, ...obj}) => obj)(currentObj);

console.log(currentObj); // { age: 20, name: 'Mark', food: '🍔' }
console.log(newObj); // { name: 'Mark' }