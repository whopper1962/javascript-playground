// const targetStatus = 'two';

// let resultValue = '';

// const STATUS_ONE = 'one';
// const STATUS_TWO = 'two';
// const STATUS_THREE = 'three';

// const map = {
//   [STATUS_ONE]: '1',
//   [STATUS_TWO]: '2',
//   [STATUS_THREE]: '3'
// };

// resultValue = map[targetStatus];

// console.log(resultValue);


let query = {
  deadline_at: {
    from: ''
  }
};

// パターン1
query.deadline_at.from = 'Hello riko';

// パターン2
query.deadline_at['from'] = 'Hello riko';

// パターン3
const from = 'from';
query.deadline_at[from] = 'Hello riko';

console.log(query); // { deadline_at: { from: 'Hello riko' } }


// アンチパターン
query['deadline_at[from]'] = 'Hello riko';
console.log(query); // { deadline_at: { from: '' }, 'deadline_at[from]': 'Hello riko' }

