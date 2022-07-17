const whopper = {
  name: 'Whopper',
  age: 24,
  food: [
    '🍔',
    '🍟',
    '🍎'
  ]
};

const copyWhopper = JSON.parse(JSON.stringify(whopper));

copyWhopper.food.push('🍇');

console.log(whopper.food); // [ '🍔', '🍟', '🍎' ]
console.log(copyWhopper.food); // [ '🍔', '🍟', '🍎', '🍇' ]

