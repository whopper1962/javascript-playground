
const array = [
  {
    id: 1,
    name: 'Masashi',
    age: 25
  },
  {
    id: 2,
    name: 'Mike',
    age: 25
  },
  {
    id: 3,
    name: 'Jack',
    age: 28
  }
];

// const result = array.reduce((acc, val) => {
//   (acc[val.age] = acc[val.age] || []).push({
//     name: val.name
//   });
//   return acc;
// }, {});

const result = array.groupBy(arr => arr.age);

console.log(result);
// {
//   '25': [ { name: 'Masashi' }, { name: 'Mike' } ],
//   '28': [ { name: 'Jack' } ]
// }

// [
//   { name: 'Masashi' },
//   { name: 'Mike' },
//   { name: 'Jack' }
// ]



// var myName= "Paul"
// switch (myName){
//   case "Peter"
//     document.write("My name is Peter.<br />")
//     break
//   case "Paul" document.write("My name is Paul.<br />") break: (default); document.write("I do not have a name.<br />") }