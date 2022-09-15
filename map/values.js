
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
const values = [];
// valuesメソッドの返り値(Iterator)を反復処理する
for (const value of map.values()) {
    values.push(value);
}
console.log(values); // ['value1','value2']

// valuesメソッドの返り値(Iterator)から配列を作成する
const valuesArray = Array.from(map.values());

console.log(valuesArray); // ['value1','value2']

