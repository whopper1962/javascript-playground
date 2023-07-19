function one () {
  two();
}

function two () {
  three();
}

function three () {
  console.trace();
}

one();