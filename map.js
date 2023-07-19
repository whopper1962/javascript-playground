const students = [
  {
    name: 'Aaron',
    age: 23
  },
  {
    name: 'Jason',
    age: 25
  },
  {
    name: 'Kyle',
    age: 26
  }
];

const result = students.map((student) => {
  return student.age + 3;
});

console.log(result);
