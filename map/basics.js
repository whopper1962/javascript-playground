const map = new Map([
  ['key', 'value'],
  ['key2', 'value2']
]);

console.log(map); // Map(2) { 'key' => 'value', 'key2' => 'value2' }
console.log(map.size); // 2
console.log(map.set('key3', 'value3')); // Map(3) { 'key' => 'value', 'key2' => 'value2', 'key3' => 'value3' }

console.log(map.get('key2')); // value2

console.log();