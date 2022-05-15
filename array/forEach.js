// forEach：配列のループ処理
// 配列の各要素に対して一度ずつコールバック関数を実行
const people = ['Masashi', 'Jack', 'Steve'];

people.forEach((value, index) => {
  console.log(`INDEX:${index}, VALUE:${value}`);
});
// INDEX:0, VALUE:Masashi
// INDEX:1, VALUE:Jack
// INDEX:2, VALUE:Steve

// ！Object.keysと組み合わせて使用することで、オブジェクトに対してもループ処理を書ける
const rams = {
  name: 'Los Angels Rams',
  state: 'Los Angels',
  qb: 'Matthew Stafford',
  rb: 'Cam Akers',
  wr: 'Cooper Kupp',
  cb: 'Jalen Ramsey',
  dt: 'Aaron Donald'
};

Object.keys(rams).forEach((key, index) => {
  console.log(`INDEX:${index},KEY:${key},VALUE:${rams[key]}`);
});
// INDEX:0,KEY:name,VALUE:Los Angels Rams
// INDEX:1,KEY:state,VALUE:Los Angels
// INDEX:2,KEY:qb,VALUE:Matthew Stafford
// INDEX:3,KEY:rb,VALUE:Cam Akers
// INDEX:4,KEY:wr,VALUE:Cooper Kupp
// INDEX:5,KEY:cb,VALUE:Jalen Ramsey
// INDEX:6,KEY:dt,VALUE:Aaron Donald
