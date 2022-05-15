const obj = {
  castle: {
    king: 'Masashi',
    queen: 'Elizabeth'
  }
}

obj.attack?.();

// console.log(obj.armies.one); // Cannot read property 'one' of undefined
// console.log(obj.armies?.one); // undefined