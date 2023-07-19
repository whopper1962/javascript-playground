
const masterArray = [
  [1, 2, 3, 4, 5],
  [1, 2],
  [1, 1, 1, 1, 2, 2, 2, 2, 4, 4],
  [1, 2, 3, 4, 5],
];

const lengths = masterArray.map(a=>a.length);
const indexOfLongestArr = lengths.indexOf(Math.max(...lengths));

console.log(indexOfLongestArr); // 2

