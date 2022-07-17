// 👎
// let price1 = 0;
// let price2 = null;

// const defaultPrice1 = price1 || 10;
// const defualtPrice2 = price2 || 5;

// console.log(defaultPrice1); // 10 🤔
// console.log(defualtPrice2); // 5

// 👍
let price1 = 0;
let price2 = null;

const defaultPrice1 = price1 ?? 10;
const defualtPrice2 = price2 ?? 5;

console.log(defaultPrice1); // 0 😌
console.log(defualtPrice2); // 5

