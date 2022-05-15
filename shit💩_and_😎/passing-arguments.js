// 💩
// function sendEmail (to, subject, body) {
//   if (to) {
//     console.log(`Sent an email to ${to}.\nsubject: ${subject}\ncontent: ${body}`);
//   } else {
//     return `Please enter a recipient.`;
//   }
// }

// sendEmail('abc@de.com', 'Help', 'This is terrible.');

// 😎

function sendEmail ({to, subject, body}) {
  if (!to) return console.log(`Please enter a recipient.`);
  console.log(`Sent an email to ${to}.\nsubject: ${subject}\ncontent: ${body}`);
}

sendEmail({
  to: 'abc@de.com',
  subject: 'Good',
  body: 'This is perfect.'
});

// Sent an email to abc@de.com.
// subject: Good
// content: This is perfect.


const x = [1, 2];
const y = [1, 2, 3, 4];

let a, b, c;
[a, b, c=10] = x;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 10

let d, e, f;
[d, e, f=10] = y;
console.log(d); // 1
console.log(e); // 2
console.log(f); // 3


