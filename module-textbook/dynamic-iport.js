// import('./module.js').then((modules) => {
//   console.log(modules);
//   modules.publicFunction();
// });

async function importModules () {
  const modules = await import('./module.js');
  modules.publicFunction();
}

importModules();