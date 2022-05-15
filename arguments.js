
function changeName ({name, }) {
  let {name} = argObj;
  name = 'Wardo';
  console.log(name); // Wardo
  console.log(obj); // { name: 'Mark', age: 23, favoriteFood: '🍔' }
}

let obj = {
  name: 'Mark',
  age: 23,
  favoriteFood: '🍔'
};

changeName(obj);

