const char = 'pending:承認待ち\r\nredoing:再アップロード待ち\r\napproved:承認済';
const hheh = 'yyyy-MM-ddTHH:mm:ss.fffZ';

// console.log(char);


function matchmatch (target) {
  if (target.match(/\r\n|\r|\n/g)) {
    format(target);
  }
}

function format (choices) {
  let formattedChoices = [];
  let splittedChoices = choices.split(/\r\n|\r|\n/g);
  for (let i = 0; i < splittedChoices.length; i++) {
    formattedChoices.push(splittedChoices[i].split(':')[0]);
  }
  return formattedChoices
}

matchmatch(char);
// matchmatch(hheh);