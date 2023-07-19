const str1 = '1';
const num1 = +str1;
console.log(num1); // 1

const str2 = 'hello';
const num2 = +str2;
console.log(num2); // NaN

const str3 = null;
const num3 = +str3;
console.log(num3); // 0

const str4 = [];
const num4 = +str4;
console.log(num4); // 0

const str5 = {};
const num5 = +str5;
console.log(num5); // NaN

const str6 = '';
const num6 = +str6;
console.log(num6); // 0
