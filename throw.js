const condition = true;

// try-catch
try {
  console.log('====================START!!!=========================');
  if (condition) {
    throw new Error('====================ERROR!!!=========================');
  }
  console.log('====================PASSED!!!=========================');
} catch (err) {
  console.log(err);
  console.log('====================PASSED IN ERROR!!!=========================');
}

// NOT try-catch
// if (condition) {
//   throw new Error('====================ERROR!!!=========================');
//   console.log('====================PASSED IN ERROR!!!=========================');
// }
// console.log('====================PASSED!!!=========================');