
const obj = {
  horse: '🐴',
  zebra: '🦓',
  unicorn: '🦄'
};

const myMap = new Map(
  Object.entries(obj)
);

for (const v of myMap.values()) {
  console.log(v); // 🐴 🦓 🦄
}

for (const str of ['a', ' b', ' c ']) {
  str = str.trim();
  console.log(`[${str}]`); // Assignment to constant variable.
}

