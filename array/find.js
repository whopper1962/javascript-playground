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

const result1 = array.find(data => {
  return data.id === 2;
});

console.log(result1); // { id: 2, name: 'Mike', age: 27 }

// 検索条件に合うものを見つけたらその時点で検索を終了する
// 以下の場合、idが4のデータも条件に当てはまるが、id3のデータを返した時点で処理が終了する
const result2 = array.find(data => {
  return data.age > 27;
});

console.log(result2); // { id: 3, name: 'Jack', age: 28 }