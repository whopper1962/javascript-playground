const founders = [
  {
    name: 'Mark'
  },
  {
    name: 'Eduardo'
  },
  {
    name: undefined
  },
  {
    name: null
  }
];

const mappedData = founders.map(data => data.name);

console.log(mappedData); // [ 'Mark', 'Eduardo', 'Dustin', undefined, null ]

const filteredData = mappedData.filter(data => data);

console.log(filteredData); // [ 'Mark', 'Eduardo' ]
