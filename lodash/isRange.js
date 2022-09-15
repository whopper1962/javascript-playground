const _ = require('lodash');

const num = 5;

console.log(_.inRange(num, 1, 10)); // true
console.log(_.inRange(num, 6, 10)); // false
console.log(_.inRange(num, 1, 5)); // false


