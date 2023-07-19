// const legend1 = {
//   firstName: 'Brendan',
//   lastName: 'Eich',
//   hello: function () {
//     console.log('Hello Class!');
//   }
// };

// const legend2 = {
//   firstName: 'Linus',
//   lastName: 'Torvalds',
//   hello: function () {
//     console.log('Hello Class!');
//   }
// };

// const legend3 = {
//   firstName: 'Ryan',
//   lastName: 'Dahl',
//   hello: function () {
//     console.log('Hello Class!');
//   }
// };

// console.log(legend1); // { firstName: 'Brendan', lastName: 'Eich', hello: [Function: hello] }
// console.log(legend2); // { firstName: 'Linus', lastName: 'Torvalds', hello: [Function: hello] }
// console.log(legend3); // { firstName: 'Ryan', lastName: 'Dahl', hello: [Function: hello] }


class Legend {
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  hello () {
    console.log('Hello Class!');
  }
}

const legend1 = new Legend('Brendan', 'Eich');
const legend2 = new Legend('Linus', 'Torvalds');
const legend3 = new Legend('Ryan', 'Dahl');


console.log(legend1); // Legend { firstName: 'Brendan', lastName: 'Eich' }
console.log(legend2); // Legend { firstName: 'Linus', lastName: 'Torvalds' }
console.log(legend3); // Legend { firstName: 'Ryan', lastName: 'Dahl' }
