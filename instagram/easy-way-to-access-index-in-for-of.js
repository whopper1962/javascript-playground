const items = ['a', 'b', 'c', 'd', 'e', 'f'];

for (const [index, item] of items.entries()) {
  console.log(`${index}: ${item}`);
}
// 0: a
// 1: b
// 2: c
// 3: d
// 4: e
// 5: f

