let a = {
  test: 'hola'
};

console.log(a);

let b = Object.assign({}, a);

b.test = 'hello';

console.log(a);

console.log(b); // 値渡し