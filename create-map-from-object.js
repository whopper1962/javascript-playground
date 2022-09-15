
const obj = {
  id: 1,
  name: 'Matthew Stafford',
  team: 'LAR'
};

const map = new Map([...Object.entries(obj)]);

console.log(map);
// Map(3) { 'id' => 1, 'name' => 'Matthew Stafford', 'team' => 'LAR' }



