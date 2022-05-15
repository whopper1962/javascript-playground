const rams = {
  quarterback: 'Matthew Stafford',
  widereceiver: 'Cooper Kupp',
  runningback: 'Cam Akers'
};

const ramsarray = [
  'Matthew Stafford',
  'Cooper Kupp',
  'Cam Akers'
];

// for (let ram in rams) {
//   console.log(ram);
// }
// quarterback
// widereceiver
// runningback

// for (let ram in ramsarray) {
//   console.log(ram);
// }
// 0
// 1
// 2

// for (ram of rams) {
//   console.log(ram);
// }

let keys = Object.keys(rams);

keys.sort();

for (key of keys) {
  console.log(`${key}:${rams[key]}`);
}
// quarterback:Matthew Stafford
// runningback:Cam Akers
// widereceiver:Cooper Kupp

for (ram of ramsarray) {
  console.log(ram);
}
// Matthew Stafford
// Cooper Kupp
// Cam Akers

