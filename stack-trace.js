
function one () {
  two();
}

function two () {
  three();
}

function three () {
  try {
    throw new Error('Error!!!!!');
  } catch (e) {
    console.error(e.stack);
  }
}

one();


