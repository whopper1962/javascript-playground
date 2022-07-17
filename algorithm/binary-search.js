const a = [1,2,4,6,1,100,0,10000,3];

a.sort(function (a, b) {
  return a - b;
});

console.log('a,', a);

// function binarySearch(arr, i) {
//   var mid = Math.floor(arr.length / 2);
//   console.log(arr[mid], i);
//   if (arr[mid] === i) {
//     console.log('match', arr[mid], i);
//     return arr[mid];
//   } else if (arr[mid] < i && arr.length > 1) {
//     console.log('mid lower', arr[mid], i);
//     binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
//   } else if (arr[mid] > i && arr.length > 1) {
//     console.log('mid higher', arr[mid], i);
//     binarySearch(arr.splice(0, mid), i);
//   } else {
//     console.log('not here', i);
//     return -1;
//   }
// }

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) {
      return mid;
    }
    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

const result = binarySearch(a, 100);
console.log(result);
