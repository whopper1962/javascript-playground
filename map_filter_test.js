let obj = [
  {
    name: 'Mark'
  },
  {
    name: 'Eduardo'
  },
  {
    name: undefined
  }
];

let data = obj.map((o) => {
  return o.name;
});

let filteredData = data.filter((d) => {
  return d;
});

console.log(data);
console.log(filteredData);