// filter：与えられた条件を配列要素それぞれに対して実行し、
// 条件を満たしている新しい配列を作成する
const array = [
  {
    id: 1,
    name: 'Masashi',
    age: 23
  },
  {
    id: 2,
    name: 'Mike',
    age: 27
  },
  {
    id: 3,
    name: 'Jack',
    age: 28
  },
  {
    id: 4,
    name: 'Steve',
    age: 30
  }
];

// ageが27より上の要素だけを抽出して新たに配列を作成
const newArray = array.filter((data) => {
  return data.age > 27;
});

console.log(newArray); // [ { id: 3, name: 'Jack', age: 28 }, { id: 4, name: 'Steve', age: 30 } ]