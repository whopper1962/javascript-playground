// global.name = 'Eduardo';

// const person = {
//   name: 'Mark',
//   hello: function (favoriteFood1, favoriteFood2) {
//     console.log(`Hello, i'm ${this.name}! I like ${favoriteFood1} and ${favoriteFood2}.`);
//   }
// };

// // const clonedFunc = person.hello.apply(person, ['🍔', '🍟']); // Hello, i'm Mark! I like 🍔 and 🍟.

// // clonedFunc(); // Hello, i'm Mark! I like 🍔.


// // person.hello(); // Hello, i'm Mark!

// // function executeCallbackFunc (callback) {
// //   callback();
// // }

// // executeCallbackFunc(person.hello); // Hello, i'm Eduardo!

// person.hello.call(person, '🍔', '🍟');

// person.hello.apply(person, ['🍔', '🍟']);

// const clonedFunc = person.hello.bind(person, '🍔', '🍟');
// clonedFunc();


// throw 'Hello';

// const hello = true;

// try {
//   if (hello) {
//     throw true;
//   }
//   console.log('World');
// } catch (err) {
//   console.log(err);
// }

throw new Error('Hello');