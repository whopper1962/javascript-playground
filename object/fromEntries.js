
const baseArray = [
  ['name', 'Whopper'],
  ['food', '🍔']
];

const createdObj = Object.fromEntries(baseArray);

console.log(createdObj); // { name: 'Whopper', food: '🍔' }

