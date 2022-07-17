function capitalizeFirstLetter ([first, ...rest]) {
  return first.toUpperCase() + rest.join('');
}

const capitalizeName = capitalizeFirstLetter('whopper');

console.log(capitalizeName); // Whopper

