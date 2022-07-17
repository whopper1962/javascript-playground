const targetChar = 'someName6';

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
    name: 'someName3',
    age: 21
  },
  {
    name: 'someName4',
    age: 25
  },
  {
    name: 'someName3',
    age: 26
  },
  {
    name: 'someName3',
    age: 27
  }
];

const foundObj = arrayOfObj.find((obj) => {
  return obj.name === targetChar;
});

console.log(foundObj);

const isDuplicate = Boolean(foundObj);

console.log(isDuplicate);