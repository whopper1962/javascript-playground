const obj = {
  name: 'Whopper',
  age: 24,
  food: ['🍔', '🍟']
};

// 👎
// const copyObj = Object.assign({}, obj);

// 👍
// const { ...copyObj } = obj;

// 👍👍
const copyObj = { ...obj };

delete copyObj.name;

console.log(copyObj); // { age: 24, food: [ '🍔', '🍟' ] }
console.log(obj); // { name: 'Whopper', age: 24, food: [ '🍔', '🍟' ] }
