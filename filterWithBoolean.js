
const arr = [1, 0, null, undefined, '', false];

const filteredArr = arr.filter(Boolean);

console.log(filteredArr); // [ 1 ]

const includesTrue = arr.some(Boolean);
console.log(includesTrue); // true

const everythingTrue = arr.every(Boolean);
console.log(everythingTrue); // false
