let targetObject = {
  name: 'Mark',
  age: 23,
  favoriteFood: '🍔'
};

const handler = {
  get: function (target, prop) {
    if (target.hasOwnProperty(prop)) {
      console.log(`${props} is ${target[prop]}.`);
    } else {
      throw new Error(`${prop} does not exists in ${target}`);
    }
  },
  set: function (target, prop, value) {
    if (target.hasOwnProperty(prop)) {
      target[prop] = value;
    } else {
      throw new Error(`${prop} does not exists in ${target}`);
    }
  },
  delteProperty: function (target, prop) {
    if (target.hasOwnProperty(prop)) {
      console.log(`${target[prop]} deleted.`);
      delete target[prop];
    } else {
      throw new Error(`${prop} does not exists in ${target}`);
    }
  }
};

const proxyInstance = new Proxy(targetObject, handler);
