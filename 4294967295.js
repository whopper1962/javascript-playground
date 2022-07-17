let array = [];

array[1] = 'hey1';
console.log(array); // [ <1 empty item>, 'hey1' ]

array[4294967294] = 'hey';
console.log(array); //  <1 empty item>, 'hey1', <4294967292 empty items>, 'hey' ]

console.log(array.length); // 4294967295


let array1 = [];

array1[4294967295] = 'wow';

console.log(array1); // [ '4294967295': 'wow' ]
