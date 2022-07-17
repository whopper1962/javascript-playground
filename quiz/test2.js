const o = {
  name: 'Brendon'
};

const s = JSON.parse(JSON.stringify(o));

const result = s === o;

console.log(result); // false