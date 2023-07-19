const str = Array(2000).fill('').map((v) => Math.random().toString(36).charAt(2)).join('');
console.log(str);

console.log(str.length);
console.log(typeof str);