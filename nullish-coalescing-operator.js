const human = {
  duration: 50
};

human.duration ??= 10;
console.log(human.duration); // 50

human.speed ??= 20;
console.log(human.speed); // 20

