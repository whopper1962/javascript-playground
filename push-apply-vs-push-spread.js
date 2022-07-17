let arr1 = [];
let arr2 = ['val1', 'val2', 'val3', 'val4'];
const max = 30000;


for (let i = 0; i < max; i++) {
  Array.prototype.push.apply(arr1, arr2);
}

// for (let i = 0; i < max; i++) {
//   arr1.push(...arr2);
// }

console.log(arr1);
