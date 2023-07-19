const _ = require('lodash');

// const num = 5;

// console.log(_.inRange(num, 1, 10)); // true
// console.log(_.inRange(num, 6, 10)); // false
// console.log(_.inRange(num, 1, 5)); // false



       
// Original array 
var array1 = ([ 3, 6, 9, 12 ]);
   
// Use of _.sample() method
let gfg = _.sample(array1);
  
// Printing original Array 
console.log("original array1: ", array1)
  
// Printing the output 
console.log(gfg);