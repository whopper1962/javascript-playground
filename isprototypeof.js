const Human = {
  prototype: {}
};

function Mutant () {}

// Mutant.prototype = Object.create(Human.prototype);

const mutant = new Mutant();

console.log(Object.getPrototypeOf(mutant));

// console.log(Human.prototype.isPrototypeOf(mutant));