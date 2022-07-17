const axios = require('axios');

const randomUser = 'https://randomuser.me/api/';
const catFact = 'https://catfact.ninja/fact';

axios.get(catFact).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.log(`Error occured!! Status:${error.response.status}`);
});
