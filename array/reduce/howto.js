// reduce：配列内のデータを累積して、一つの値にする
// 隣り合う2つの配列要素に対して左から右へ同時に関数を適用し、単一の値にする
// 配列.reduce(function(累積値, 要素) {})
// https://www.sejuku.net/blog/69622

// 配列内の要素が数値：合計を算出
// 配列内の要素が文字列：全ての文字をつなぎ合わせる

let array = [1, 2, 3, 4, 5];

// accumulator：左の値
// currentValue：今の値
// currentIndex：currentValueのインデックス
// array：対象の配列
let result = array.reduce(function (accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
});

console.log(result);

// 第二引数はオプション
// 初期値を設定できる
// コールバックが初めて呼び出されたときの previousValue の初期値
// initialValue が指定された場合は、 currentValue も配列の最初の値に初期化される
// initialValue が指定されなかった場合、 previousValue は配列の最初の値で初期化され、 currentValue は配列の 2 番目の値で初期化される

// ↑：空配列のメソッドとして実行された場合、エラーが起きるが、
// 第二引数に「0」を渡しておくとエラーにならない

let emptyArray = [];

let result2 = emptyArray.reduce(function (accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
}, 0);

console.log(result2); // 0