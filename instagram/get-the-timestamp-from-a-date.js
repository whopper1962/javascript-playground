// 👎
// const currentDate = new Date();
// const timestamp = currentDate.getTime();
// console.log(timestamp); // 1657998998090


// 👍
// const timestamp = new Date().getTime();
// console.log(timestamp); // 1657999010163


// 👍👍
const timestamp = +new Date();
console.log(timestamp); // 1657999021314

