let personArray = [
  ['name', 'Whopper'],
  ['age', 24],
  ['food', ['🍔', '🍟']]
];

let person = Object.fromEntries(personArray);

console.log(person); // { name: 'Whopper', age: 24, food: [ '🍔', '🍟' ] }

