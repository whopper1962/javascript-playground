function Gadget () {
  let name = 'iPhone';
  this.getName = function () {
    return name;
  }
}

let toy = new Gadget();

console.log(toy.name); // undefined
console.log(toy.getName()); // iPhone