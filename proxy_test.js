const obj = {
  name: 'Mark',
  age: 23,
  favoriteFood: '🍔'
};

const handler = {
  get: function (target, prop) {
    if (target.hasOwnProperty(prop)) {
      console.log(`Value is ${target[prop]}.`);
    } else {
      console.log(`There is no such data.`);
    }
  },
  set: function (target, prop, value) {
    if (target.hasOwnProperty(prop)) {
      console.log(`Data changed.`);
      target[prop] = value;
    } else {
      console.log(`There is no such data.`);
    }
  },
  deleteProperty: function (target, prop) {
    if (target.hasOwnProperty(prop)) {
      console.log(`${target[prop]} deleted.`);
      delete target[prop];
    } else {
      console.log(`There is no such data.`);
    }
  }
};


const proxyInstance = new Proxy(obj, handler);

proxyInstance.favoriteFood;

proxyInstance.name;
proxyInstance.name = 'Eduardo';
proxyInstance.name;

delete proxyInstance.age;
