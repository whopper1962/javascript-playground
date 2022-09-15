
let array = [1, 2, 3, 4, 5];

console.log(array.reduce((x, y) => {
  return x + y;
}, 0)); // 15

console.log(array.reduce((x, y) => {
  return x + y;
}, 1)); // 16


let empty = [];

console.log(empty.reduce((x, y) => {
  return x + y;
})); // TypeError


