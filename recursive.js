let isTruncated = false;

// 今やっていること
// 課題:isTruncatedをtrueにする前に、while()に入っている
// 解決法:apiのコールバック完了まで処理を止める
// do {
//   api(() => {
//     isTruncated = true;
//   });
//   console.log('World');
// } while (isTruncated);

// 提案: recursiveを使って、処理を行う
// async function recursive () {
//   await api(() => {
//     console.log('Hello');
//     isTruncated = true;
//     // データ取得処理
//     // ダウンロード処理
//     // isTruncatedがtrueの場合、自分自身を実行(ループ)
//     if (isTruncated) {
//       return recursive();
//     }
//   });
//   console.log('World');
// }

// 2秒後にコールバック関数を実行するAPI
// function api (callback) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       callback();
//       resolve();
//     }, 2000);
//   });
// }
// recursive();

function recursive () {
  console.log('Hello');
  recursive();
  return;
}
recursive();

// while (true) {
//   console.log('Hello');
// }

// function fibonacci(n) {
//   function do_fibo(a, b, n) {
//     if (n < 1) {
//       return b;
//     }
    
//     return do_fibo(b, a + b, n - 1);
//   }
  
//   return do_fibo(0, 1, n - 1);
// }
// fibonacci();