// const pattern = /r$/i;

const str = 'whopper';

const pattern = new RegExp('r$');

console.log(pattern.test(str)); // true
