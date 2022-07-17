let nums = [3,5,9];

nums.map(function( value, index, array ) {
  array[index] = value * 2;
});

console.log(nums); // [ 6, 10, 18 ]


