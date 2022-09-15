
const trader = [
  { id: 1, name: 'Matthew Stafford', trader_name: '業者1' },
  { id: 2, name: 'Cooper Kupp', trader_name: null },
  { id: 3, name: 'Jalen Ramsey', trader_name: null },
  { id: 6, name: 'Riko Murata', trader_name: '業者2' },
  { id: 7, name: 'Masashi Kawakami', trader_name: '業者2' }
];


const groupedTraders = trader.reduce((rv, x) => {
  (rv[x.trader_name] = rv[x.trader_name] || []).push({
    id: x.id,
    name: x.name
  });
  return rv;
}, {});

console.log(groupedTraders);

// {
//   '業者1': [ { id: 1, name: 'Matthew Stafford' } ],
//   null: [
//     { id: 2, name: 'Cooper Kupp' },
//     { id: 3, name: 'Jalen Ramsey' }
//   ],
//   '業者2': [
//     { id: 6, name: 'Riko Murata' },
//     { id: 7, name: 'Masashi Kawakami' }
//   ]
// }

// trader_nameがnullのやつを先頭に持ってくる
const nullFirstedKeys = [
  'null',
  ...Object.keys(groupedTraders).filter((key) => key !== 'null')
];
const sorted = nullFirstedKeys.reduce((obj, key) => { 
  obj[key] = groupedTraders[key]; 
  return obj;
}, {});

console.log(sorted);
// {
//   null: [
//     { id: 2, name: 'Cooper Kupp' },
//     { id: 3, name: 'Jalen Ramsey' }
//   ],
//   '業者1': [ { id: 1, name: 'Matthew Stafford' } ],
//   '業者2': [
//     { id: 6, name: 'Riko Murata' },
//     { id: 7, name: 'Masashi Kawakami' }
//   ]
// }



