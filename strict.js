
// function foo () {
//   'use strict';
//   const obj = Object.freeze({
//     name: 'Whopper'
//   });
//   obj.name = 'Jake';
//   console.log(obj); // Cannot assign to read only property 'name' of object
// }

// function hey () {
//   const obj = Object.freeze({
//     name: 'Whopper'
//   });
//   obj.name = 'Jake';
//   console.log(obj); // { name: 'Whopper' }
// }

// foo();
// hey();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 'use strict';

// let private = 'Whopper';
// console.log(private); // Whopper
// function foo () {
// }

// function hey () {
// }

// foo();
// hey();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 'use strict';

// let private = 'Whopper';

// console.log(private); // Unexpected strict mode reserved word
