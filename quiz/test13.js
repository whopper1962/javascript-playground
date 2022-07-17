function precise(x) {
  return x.toPrecision(4);
}

console.log(precise(123.456)); // "123.5"

console.log(precise(0.004)); // "0.004000"

console.log(precise(1.23e5)); // "1.230e+5"