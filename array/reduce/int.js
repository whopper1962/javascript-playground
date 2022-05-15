const numbers = [1, 2, 3, 4, 5, 6, 7];

const result = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(result); // 28