

// const stats = await getStats();
// const contibutors = await getContibutors();


const [stats, contibutors] = await Promise.all([
  getStats(), getContibutors()
]);


