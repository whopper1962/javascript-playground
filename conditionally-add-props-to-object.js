condition = false;

const foo = {
  ho: 'Riko',
  ma: 'Ma',
  c: 'C',
  ...condition && { is_add_provider_user: true },
  d: 'D'
};

console.log(foo);