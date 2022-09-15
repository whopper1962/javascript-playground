// const { default: axios } = require("axios");

// const originalAxios = axios.create();

axios.interceptors.response.use((response) => {
  console.error(response);
  return response;
});

axios.get('https://catfact.ninja/fact').then((response) => {
  console.log(response.data);
});