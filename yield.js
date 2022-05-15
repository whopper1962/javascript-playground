// function* generatorA () {
//   yield "Hello";
//   yield "JavaScript";
//   yield "!!!";
// }

// generator = generatorA();

// console.log(generator.next()); // { value: 'Hello', done: false }
// console.log(generator.next()); // { value: 'JavaScript', done: false }
// console.log(generator.next()); // { value: '!!!', done: false }
// console.log(generator.next()); // { value: undefined, done: true }


// function* generatorA () {
//   yield 'Hello. This is Masashi.....';
//   yield 'Can you hear me?....';
//   yield 'If you do, say something....';
// }

// const generator = generatorA();

// console.log(generator.next().value);

// console.log(generator.next().value);

// console.log(generator.next().value);



// function* generatorA () {
//   yield 'Hello, this is Masashi...';
//   yield 'This is Masashi....';
//   yield 'If you do, say something.....';
// }

// const generator = generatorA();

// console.log(generator.next().value);


function* generatorA () {
  yield 'Hello, this is Masashi....';
  yield 'Does anybody hear me.....?';
  yield 'Somebody help me......';
}

const generator = generatorA();

console.log(generator.next().value); // Hello, this is Masashi....
console.log(generator.next().value); // Does anybody hear me.....?
console.log(generator.next().value); // Somebody help me......