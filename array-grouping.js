
const players = [
  { id: 1, name: 'Matthew Stafford', trader_name: 'LAR' },
  { id: 2, name: 'Cooper Kupp', trader_name: 'LAR' },
  { id: 3, name: 'Jalen Ramsey', trader_name: 'LAR' },
  { id: 5, name: 'DK Metcalf', trader_name: 'SEA' },
  { id: 6, name: 'Alvin Kamara', team: 'NO' }
];

function groupBy (xs, key) {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

const playersGroubByTeam = groupBy(players, 'team');

console.log(JSON.stringify(playersGroubByTeam, null, 2));

// {
//   "LAR": [
//     {
//       "id": 1,
//       "name": "Matthew Stafford",
//       "team": "LAR"
//     },
//     {
//       "id": 2,
//       "name": "Cooper Kupp",
//       "team": "LAR"
//     },
//     {
//       "id": 3,
//       "name": "Jalen Ramsey",
//       "team": "LAR"
//     }
//   ],
//   "SEA": [
//     {
//       "id": 5,
//       "name": "DK Metcalf",
//       "team": "SEA"
//     }
//   ],
//   "NO": [
//     {
//       "id": 6,
//       "name": "Alvin Kamara",
//       "team": "NO"
//     }
//   ]
// }


