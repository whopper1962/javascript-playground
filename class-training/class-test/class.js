// const Human = require('./parent');


class Human {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  mouse (sentense) {
    console.log(`${this.name}: "${sentense}".`);
  }
}


class Footballer extends Human {
  constructor(name, age, position, team) {
    super(name, age);
    this.team = team;
    this.position = position;
  }
  mouse () {
    console.log('This is not a parent method!');
  }
  talk (sentense) {
    // console.log(this.baseNumber); // 12
    // console.log(this.name); // Matthew Stafford
    // super.mouse(sentense); // Matthew Stafford: "Turbo set!!!".
    super.mouse(sentense); // This is not a parent method!
  }
}
const player1 = new Footballer('Matthew Stafford', 34, 'QB', 'LAR');

player1.talk('Turbo set!!!');

// player1.run(15);
// player1.touchdown();