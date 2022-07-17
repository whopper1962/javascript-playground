const colors = [
  '🟥 red',
  '🟨 yellow',
  '🟩 green',
  '🟦 blue',
];

const [,, ...newColors] = colors;

console.log(newColors); // [ '🟩 green', '🟦 blue' ]