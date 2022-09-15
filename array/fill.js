
let array = [1, 2, 3, 4, 5];
array.fill(0);
console.log(array); // [ 0, 0, 0, 0, 0 ]

let array2 = [1, 2, 3, 4, 5];
array2.fill(0, 1, 4);
console.log(array2); // [ 1, 0, 0, 0, 5 ]

let array3 = new Array(5).fill(9);
console.log(array3); // [ 9, 9, 9, 9, 9 ]

// let arrayOfObj = new Array(3).fill({ x: 0, y: 0 });
// console.log(arrayOfObj); // [ { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 } ]

// arrayOfObj[0].x = { x: 0, y: 0 };
// console.log(arrayOfObj); // [ { x: 3, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 0 } ]


// let arrayOfObj = new Array(3).fill({ x: 0, y: 0 });
// console.log(arrayOfObj); // [ { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 } ]

// arrayOfObj[0] = { x: 3, y: 0 };
// console.log(arrayOfObj); // [ { x: 3, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 } ]


let arrayOfObj = new Array(3).fill().map(() => ({ x: 0, y: 0 }));
console.log(arrayOfObj); // [ { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 } ]

arrayOfObj[0].x = 3;
console.log(arrayOfObj); // [ { x: 3, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 } ]

