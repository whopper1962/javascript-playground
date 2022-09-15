
// let original = ['Whopper', 'Mark', 'Jason'];
// let copy = Array.from(original);
// console.log(copy); // [ 'Whopper', 'Mark', 'Jason' ]

let charArray = Array.from('Whopper');
console.log(charArray); // [ 'W', 'h', 'o', 'p', 'p', 'e', 'r' ]

let arrayLike = {
  length: 4
};

let trueArray = Array.from(arrayLike);

console.log(trueArray); // [ undefined, undefined, undefined, undefined ]

let nums = [1, 2, 3, 4, 5];
let numsArray = Array.from(nums, (el) => el * 5 );
console.log(numsArray); // [ 5, 10, 15, 20, 25 ]


let original = ['Whopper', 'Mark', 'Jason'];
let copy = Array.from(original, (el) => {
  return el.toLowerCase();
});
console.log(copy); // [ 'whopper', 'mark', 'jason' ]


