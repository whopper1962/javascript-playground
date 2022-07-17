const users = [
  {id: 1, name: 'Whopper', language: 'JavaScript'},
  {id: 2, name: 'Mark', language: 'PHP'},
  {id: 3, name: 'Cooper', language: 'Ruby'},
];

const names = Array.from(users, ({name}) => name);

console.log(names); // [ 'Whopper', 'Mark', 'Cooper' ]