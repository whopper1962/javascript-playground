const fs = require('fs');

async function parseFile (fileName) {
  let stream = fs.createReadStream(fileName, {encoding:'utf-8'});
  for await (let chunk of stream) {
    parseChunk(chunk);
  }
}

function parseChunk (chunk) {
  console.log(chunk);
}

