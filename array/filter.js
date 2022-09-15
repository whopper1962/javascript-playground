// filter：与えられた条件を配列要素それぞれに対して実行し、
// 条件を満たしている新しい配列を作成する
const array = [
  {
    id: 1,
    name: 'Masashi',
    age: 23,
    is_active: true
  },
  {
    id: 2,
    name: 'Mike',
    age: 27,
    is_active: true
  },
  {
    id: 3,
    name: 'Jack',
    age: 28,
    is_active: false
  },
  {
    id: 4,
    name: 'Steve',
    age: 30,
    is_active: false
  }
];

// ageが27より上の要素だけを抽出して新たに配列を作成
// const newArray = array.filter((data) => {
//   return data.age > 27;
// });
const newArray = array.filter((data) => {
  return data.is_active;
});

console.log(newArray); // [ { id: 3, name: 'Jack', age: 28 }, { id: 4, name: 'Steve', age: 30 } ]