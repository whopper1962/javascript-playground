// fetch('https://catfact.ninja/testurl').then((response) => {
//   console.log(response);
//   alert('Success!');
// }).catch((error) => {
//   console.log(`Error occured!! Status:${error.response.status}`);
// });

axios.get('https://catfact.ninja/testurl').then((response) => {
  console.log(response.data.fact);
}).catch((error) => {
  console.log(`Error occured!! Status:${error.response.status}`);
});

