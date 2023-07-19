const data = [[1,2], [1,1], [2,0], [1,2], [1,1]];

var dataUnique = data.reduce(function (out, item) {
  return out.concat(out.filter(function (comp) {
    return item.toString() == comp.toString();
  }).length ? [] : [item])
}, []);

console.log(dataUnique); // [ [ 1, 2 ], [ 1, 1 ], [ 2, 0 ] ]