const array = [1, 2, 3, 4, 5];
let result = [];
for (const { a, b } of array) {
  result.push(a + b);
}
console.log(result);