let obj = Object.freeze({
  name: 'Jack',
  age: 23,
  favoriteFood: '🍔',
  address: Object.freeze({
    number: '1234'
  })
});

console.log(obj);

obj.name = 'Mark';

obj.address.number = '5678';

console.log(obj);