

let array = [1, 2, 3, 4, 5];
array.copyWithin(1);
console.log(array); // [ 1, 1, 2, 3, 4 ]

let array2 = [1, 2, 3, 4, 5];
array2.copyWithin(1, 2);
console.log(array2); // [ 1, 3, 4, 5, 5 ]

let array3 = [1, 2, 3, 4, 5];
array3.copyWithin(1, 2, 4);
console.log(array3); // [ 1, 3, 4, 4, 5 ]

let array4 = [1, 2, 3, 4, 5];
array4.copyWithin(-4, -3);
console.log(array4); // [ 1, 3, 4, 5, 5 ]


