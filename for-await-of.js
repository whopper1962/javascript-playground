process.stdin.on('data', (data) => {
  console.log(`You inputed ${data.toString()}`);
  process.exit();
});

