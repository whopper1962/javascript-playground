
const arr = [
  { id:"a0", propA: "A0-propA", propB: "A0-propB" },
  { id:"a1", propA: "A1-propA", propB: "A1-propB" },
  { id:"b0", propA: "B0-propA", propB: "B0-propB" },
  { id:"a1", propA: "A0-propA", propB: "A0@propB" },
  { id:"a23", propA: "A0-prop2", propB: "A0@propB" },
  { id:"a10", propA: "A0-propA", propB: "A0@propB" },
  { id:"a2", propA: "A0-propA", propB: "A0@propB" }
];

// 要素をユニークにする
// const uniq_arr_1 = [...arr.reduce((map, a) => {
//   return map.set(a.id, a);
// }, new Map()).values()];

const uniq_arr_1 = [... new Map(arr.map(a => [a.id, a])).values()];

// 要素をユニークにし、変換もする
const uniq_arr_2 = [...arr.reduce((map, a) => {
  return map.set(a.id, {
    id: a.id,
    value: a.propA,
    desc: a.propB
  });
}, new Map()).values()];+


console.log(uniq_arr_1);
// [
//   { id: 'a0', propA: 'A0-propA', propB: 'A0@propB' },
//   { id: 'a1', propA: 'A1-propA', propB: 'A1-propB' },
//   { id: 'b0', propA: 'B0-propA', propB: 'B0-propB' },
//   { id: 'a2', propA: 'A0-propA', propB: 'A0@propB' }
// ]

console.log(uniq_arr_2);
// [
//   { id: 'a0', value: 'A0-propA', desc: 'A0@propB' },
//   { id: 'a1', value: 'A1-propA', desc: 'A1-propB' },
//   { id: 'b0', value: 'B0-propA', desc: 'B0-propB' },
//   { id: 'a2', value: 'A0-propA', desc: 'A0@propB' }
// ]


