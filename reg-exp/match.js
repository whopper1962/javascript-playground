const path = '/member/mypaged/connect-insurance/33';
console.log(path.match(/\/member\/mypage\/connect-insurance\/*/));
// console.log(/\/member\/mypage\/connect-insurance\/*/.test(path));

function test () {
  // const path = this.$route.fullPath;
  // const pattern = /\/member\/mypage\/connect-insurance\/*/;
  return (/\/member\/mypage\/connect-insurance\/*/).test(path);
}

if (test()) {
  console.log('TRUE');
} else {
  console.log('FALSE');
}