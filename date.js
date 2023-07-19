const arr = [
  {
    a: "hello",
    b: "masashi",
  },
  {
    a: "hello",
    b: "masashi",
  },
];

const mapped = arr.map((obj) => {
  return {
    a: obj.a,
    b: obj.b,
    src: "source",
  };
});

console.log(arr);
console.log(mapped);