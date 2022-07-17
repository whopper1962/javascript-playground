let array = [
  [1, 2],
  [3, 4],
  5, 6, 7, 8, 9,
  [10, 11, 12, 13, 14, 15]
];

const numberList = array.flat();
console.log(numberList); // [ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15 ]
