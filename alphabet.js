
function convertNumberToCharacter (number) {
  let baseCharacter = ('A').charCodeAt(0);
  console.log('baseCharacter', baseCharacter);
  let character = '';

  do {
    number --;
    character = String.fromCharCode(baseCharacter + (number % 26)) + character;
    console.log('number % 26', number % 26);
    console.log('baseCharacter + (number % 26)', baseCharacter + (number % 26));
    number = (number / 26) >> 0;
    console.log('(number / 26) >> 0', number);
  } while(number > 0);

  return character;
}

function convertCharacterToNumber (character) {
  let currentCharacter = '';
  let number = 1;

  do {
    currentCharacter = convertNumberToCharacter(number);
    number++;
  } while (character !== currentCharacter);

  return number - 1;
}


console.log('result', convertNumberToCharacter(43));

module.exports = {
  convertNumberToCharacter,
  convertCharacterToNumber
};