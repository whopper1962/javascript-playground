
function hasSameElements (a, b) {
  return a.length === b.length && a.every((v, i) => {
    return v === b[i];
  });
}

console.log(hasSameElements([1, 2], [1, 2])); // true
console.log(hasSameElements([1, 4], [1, 2])); // false

