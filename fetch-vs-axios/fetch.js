fetch('https://catfact.ninja/fact').then((response) => {
  return response.json();
}).then((responseJson) => {
  console.log(responseJson);
});