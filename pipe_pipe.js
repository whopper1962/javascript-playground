function test (name) {
  const targetName = name || 'Steve';
  console.log(`Hello, ${targetName}!`);
}

test('Riko'); // Hello, Riko!
test(); // Hello, Steve!
