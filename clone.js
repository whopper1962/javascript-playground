let a = {
  test: 'hola'
};

console.log(a);

let b = a;

b.test = 'hello';


console.log(a); // 参照渡し