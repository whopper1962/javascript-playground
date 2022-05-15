
let rams = [
  'Matthew Stafford',
  'Cooper Kupp',
  'Aaron Donald',
  'Von Miller',
  'Jalen Ramsey'
];

// 第一引数：そのインデックス以降の要素を消す
// rams.splice(1);
// console.log(rams); // [ 'Matthew Stafford' ]

// 第二引数：第一引数のインデックスから、{第二引数}個の値を消す
// rams.splice(3, 1);
// console.log(rams); // [ 'Matthew Stafford', 'Cooper Kupp', 'Aaron Donald', 'Jalen Ramsey' ]

// 第三引数以降：第一引数のインデックスから、{第二引数}個の値を消して、そこに第三引数以降の値を入れる
// rams.splice(3, 1, 'Bobby Wagner');
// console.log(rams); // [ 'Matthew Stafford', 'Cooper Kupp', 'Aaron Donald', 'Bobby Wagner', 'Jalen Ramsey' ]

rams.splice(3, 1, 'Allen Robinson', 'Bobby Wagner');
console.log(rams); // [ 'Matthew Stafford', 'Cooper Kupp', 'Aaron Donald', 'Allen Robinson', 'Bobby Wagner', 'Jalen Ramsey' ]

