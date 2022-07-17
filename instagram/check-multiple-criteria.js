// 👎
// const fruits = ['banana', 'apple', 'grapes', 'cherry'];
// const fruit = 'apple';
// 
// if (fruit === 'banana' || fruit === 'apple' || fruit === 'grapes' || fruit === 'cherry') {
//   console.log('Proceed');
// }


// 👍
// const fruits = ['banana', 'apple', 'grapes', 'cherry'];
// const fruit = 'apple';
// 
// if (fruits.includes(fruit)) {
//   console.log('Proceed');
// }


// 👍👍
const fruits = new Set(['banana', 'apple', 'grapes', 'cherry']);
const fruit = 'apple';

if (fruits.has(fruit)) {
  console.log('Proceed');
}