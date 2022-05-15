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

const result = students.every((student) => {
  return student.age < 30;
});

console.log(result);