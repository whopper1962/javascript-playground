
const trueCondition = true;
const falseCondition = false;

// 👎
// const sports = [
//   "basketball", 
//   trueCondition && "football", 
//   falseCondition && "baseball"
// ];
// console.log(sports); // [ 'basketball', 'football', false ]


const sports = [
  "basketball",
  ...trueCondition ? ["football"] : [],
  ...falseCondition ? ["baseball"] : []
];

console.log(sports); // [ 'basketball', 'football' ]


