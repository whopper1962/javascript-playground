const obj = {
  firstName: 'Whopper',
  middleName: undefined,
  lastName: 'Bacon'
};

const objAsArr = Object.entries(obj);

const filteredArr = objAsArr.filter(([_, value]) => {
  return value !== undefined;
});

const filteredObj = Object.fromEntries(filteredArr);
