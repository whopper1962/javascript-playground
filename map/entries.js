const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
const entries = [];
for (const [key, value] of map.entries()) {
    entries.push(`${key}:${value}`);
}
console.log(entries); // ['key1:value1','key2:value2']
