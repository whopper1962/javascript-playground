
const data = ['email', 'role', 'type', 'name'];
const newData = ['role', ...data.filter(item => item !== 'role')];

console.log(newData); // [ 'role', 'email', 'type', 'name' ]

