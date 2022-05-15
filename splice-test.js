let rams = [
  'Matthew Stafford',
  'Cooper Kupp',
  'Aaron Donald',
  'Von Miller',
  'Jalen Ramsey'
];

// rams.splice(0);
// [
//   'Matthew Stafford',
//   'Cooper Kupp',
//   'Aaron Donald',
//   'Von Miller',
//   'Jalen Ramsey'
// ]

// rams.splice(0, 2);
// [
//   'Aaron Donald',
//   'Von Miller',
//   'Jalen Ramsey'
// ]

rams.splice(3, 1, 'Bobby Wagner', 'Allen Robinson');
// [
//   'Matthew Stafford',
//   'Cooper Kupp',
//   'Aaron Donald',
//   'Bobby Wagner',
//   'Allen Robinson',
//   'Jalen Ramsey'
// ]

console.log(rams);
