fetch('/api/users/current').then((response) => {
  if (response.ok && response.headers.get('Content-Type') === 'application/json') {
    return response.json();
  } else {
    throw new Error(`Unexpected response status ${response.status} or content type.`);
  }
}).then((currentUser) => {
  displayUserInfo(currentUser);
}).catch((error) => {
  console.log('Error while fetching current user:', error);
});


