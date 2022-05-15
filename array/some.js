// some：配列の中の少なくとも一つの要素が条件を満たすかどうかをチェックする
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
    age: 31
  }
];
// 配列内の少なくとも1つの要素のageが30より大きかどうか
const result1 = array.some((data => {
  return data.age > 30;
}));
console.log(result1); // true

// 配列内の全ての要素のageが30より大きいかどうか
const result2 = array.every((data) => {
  return data.age > 30;
});
console.log(result2); // false




