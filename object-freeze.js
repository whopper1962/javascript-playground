// 'use strict';

// 👎
// const obj = {
//   name: 'Whopper',
//   food: '🍔'
// };

// obj.name = 'Mark';

// obj = {}; // 参照先の変更はエラーになる

// console.log(obj); // { name: 'Mark', food: '🍔' }


// const arr = ['Whopper', '🍔'];

// arr[1] = '🍟';

// console.log(arr); // [ 'Whopper', '🍟' ]

// 👍

const obj = Object.freeze({
  name: 'Whopper',
  food: '🍔',
  football: {
    number: 3,
    position: 'QB'
  }
});

obj.name = 'Mark';
console.log(obj);
// {
//   name: 'Whopper',
//   food: '🍔',
//   football: { number: 3, position: 'QB' }
// }

obj.football.number = 9;
console.log(obj); 
// {
//   name: 'Whopper',
//   food: '🍔',
//   football: { number: 9, position: 'QB' }
// }
// { name: 'Whopper', food: '🍔' }

const arr = Object.freeze(['Whopper', '🍔']);

arr[1] = '🍟';

console.log(arr); // [ 'Whopper', '🍔' ]




