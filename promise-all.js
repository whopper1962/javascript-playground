function doSomethingAsync(value) {
  console.error('Exec');
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Resolving " + value);
      resolve(value);
    }, Math.floor(Math.random() * 1000));
  });
}

function test() {
    const promises = [];
    for (let i = 0; i < 5; ++i) {
      console.error('Before push');
      promises.push(doSomethingAsync(i));
      console.log(promises);
    }
    Promise.all(promises)
      .then((results) => {
        console.log("All done", results);
      })
      .catch((e) => {
        // Handle errors here
      });
}

test();
