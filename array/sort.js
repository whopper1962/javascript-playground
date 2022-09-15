
let fruits = ['banana', 'apple', 'grapes'];

console.log(fruits.sort()); // [ 'apple', 'banana', 'grapes' ]
console.log(fruits); // [ 'apple', 'banana', 'grapes' ]

let nums = [23, 1, 99, 89, 7];

console.log(nums.sort((a, b) => a - b)); // [ 1, 7, 23, 89, 99 ]
console.log(nums.sort((a, b) => b - a)); // [ 99, 89, 23, 7, 1 ]

let chars = ['ant', 'Bug', 'dog', 'Cat'];

console.log(chars.sort((s, t) => {
  let a = s.toLowerCase();
  let b = t.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
})); // [ 'ant', 'Bug', 'Cat', 'dog' ]


