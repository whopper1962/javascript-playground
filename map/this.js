let lastNames = {
  "Matthew": "Stafford",
  "Cooper": "Kupp"
};

let firstNames = ["Matthew", "Cooper"];

firstNames.map(function (value) {
  console.log(this[value]);
}, lastNames);

// Stafford
// Kupp
