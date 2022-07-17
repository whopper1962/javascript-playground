
let array = [0, 1, 2, 3, 4, 5];
const concattedArray = [0, 1, 2, 3, 4, 5];

for (let i = 0; i < 100; i++) {
  array = array.concat(concattedArray);
}

console.time(`loop test`);
for (let i = 0, max = array.length; i < max; i++) {
  console.log(`value:${i}`);
}
// for (let i = 0; i < array.length; i++) {
//   console.log(`Value:${i}`);
// }
console.timeEnd(`loop test`);

// console.log(`Execution took: ${endTime - startTime}`);
