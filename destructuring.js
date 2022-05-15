const turtle = {
  name: 'Mike🐢',
  meal: '2',
  diet: 'berries'
};

// function feed (animal) {
//   const {name, meal, diet} = animal;
//   return `Feed ${name} ${meal} kilos of ${diet}.`;
// }


function feed ({name, meal, diet}) {
  return `Feed ${name} ${meal} kilos of ${diet}.`;
}

console.log(feed(turtle));

let hoge = {};
hoge.name = '';


