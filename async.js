


async function testAsync (x) {
  // do something!
}




function testAsync () {
  return new Promise(function (resolve, reject) {
    try {
      resolve(function (x) {
        // do something!
      });
    } catch (e) {
      reject(e);
    }
  });
}





