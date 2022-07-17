let arrayOfObj = [
  {
    name: 'someName1',
    age: 38
  },
  {
    name: 'someName2',
    age: 24
  },
  {
    name: 'someName4',
    age: 26
  },
  {
    name: 'someName5',
    age: 23
  }
];

const names = arrayOfObj.map((obj) => {
  return obj.name;
});

const isDuplicate = names.some((name, index) => {
  return names.indexOf(name) !== index;
});

console.log(isDuplicate);