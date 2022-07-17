let a = [0, 1, 2, 3];
let b = [4, 5, 6, 7];

const count = 10000;

console.time();

for (let i = 0; i < count; i++) {
  a = a.concat(b);
}
console.log(a);

console.timeEnd();


// let a = [0, 1, 2, 3];
// let b = [4, 5, 6, 7];
// const count = 10000;

// console.time();
// for (let i = 0; i < count; i++) {
//   Array.prototype.push.apply(a, b);
// }
// console.timeEnd();



// const count = 100000;
// console.time();
// for (let i = 0; i < count; i++) {
//   let a = [0, 1, 2, 3], b = [4, 5, 6, 7];
//   a = a.concat(b);
// }
// console.timeEnd();


// let count = 100000;
// console.time();
// for (let i = 0; i < count; i++) {
//   let a = [0, 1, 2, 3], b = [4, 5, 6, 7];
//   Array.prototype.push.apply(a, b);
// }
// console.timeEnd();
