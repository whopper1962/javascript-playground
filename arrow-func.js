
variable = 'Global variable';

function normalFunc () {
  console.log(this.variable);
}

const arrowFunc = () => {
  console.log(this.variable);
};

const objNormal = {
  variable: 'Inner variable',
  func: normalFunc
};

const objArrow = {
  variable: 'Inner variable',
  func: arrowFunc
};

objNormal.func();
objArrow.func();
