const person = Object.freeze({
  name: 'Jack',
  age: 25,
  favoriteFood: '🍔',
  address: Object.freeze({
    street: '1234'
  })
});

console.log(person);

person.name = 'Mark';
person.address.street = '5678';

console.log(person);
