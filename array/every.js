// every：配列内の全ての要素が、条件（コールバック）を満たすかどうかをチェックする
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

// 配列内の要素それぞれの、ageが20より上かどうかをチェック
const result = array.every((data) => {
  return data.age > 20;
});

console.log(result); // true