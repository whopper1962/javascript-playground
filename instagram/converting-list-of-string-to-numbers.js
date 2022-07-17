const stringNumbers = ['123', '4.45', 'whopper', '1000'];

const numbers = stringNumbers.map(Number);

console.log(numbers); // [ 123, 4.45, NaN, 1000 ]
