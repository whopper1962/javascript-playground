loop1:for (let i = 0; i < 4; i++) {
  loop2:for (let j = 0; j < 3; j++) {
    if (i === 2) {
      continue loop1;
    }
  }
  console.log(`${i} PASSED!!`);
}