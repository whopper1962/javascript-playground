

let file = 'sample.png';

// 💩
// let file_type = file.split('.')[1];

// 👍
let file_type = file.split('.').pop();

console.log(file_type); // png


