
const val1 = 0;
console.log(!!val1); // false

const val2 = null;
console.log(!!val2); // false

const val3 = undefined;
console.log(!!val3); // false

const val4 = NaN;
console.log(!!val4); // false

const val5 = {};
console.log(!!val5); // true

const val6 = [];
console.log(!!val6); // true

const val7 = 'hello';
console.log(!!val7); // true

const val8 = 3.14;
console.log(!!val8); // true

const val9 = new Date();
console.log(!!val9); // true


