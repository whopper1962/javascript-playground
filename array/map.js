// map：配列内の全ての要素に対してコールバック関数を実行
// 
const numbers = [1, 2, 3, 4, 5];

const result = numbers.map((number) => {
  return number * 2;
});

console.log(result); // [ 2, 4, 6, 8, 10 ]