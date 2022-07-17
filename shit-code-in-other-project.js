// async function fetchShopList() {
//   const params = {
//     params: {
//       per_page: 200,
//       page: 1
//     },
//   };
//   const shopList = [];
//   let lastPage = 1;
// }

let shopList = [];
let num = 0;

// console.time('push-apply');
// do {
//   Array.prototype.push.apply(shopList, [1,2,3]);
//   num++;
// } while (num < 2);
// console.log(shopList);
// console.timeEnd('push-apply');

console.time('concat');
do {
  shopList = shopList.concat([1,2,3]);
  console.log(shopList);
  num++;
} while (num < 2);
console.log(shopList);
console.timeEnd('concat')
