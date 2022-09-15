
const arr = new Array(1000);

for (let i = 0; i < arr.length; i++) {
  console.log(`Loop${i+1}`);
}

for (let i = 0, arrLength = arr.length; i < arrLength; i++) {
  console.log(`Loop${i+1}`);
}

