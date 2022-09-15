

let originalNumber = [1,2,3,4,5];

let cloneNumber = originalNumber.slice();

cloneNumber[2] = 'whopper';

console.log(originalNumber); // [ 1, 2, 3, 4, 5 ]
console.log(cloneNumber); // [ 1, 2, 'whopper', 4, 5 ]


