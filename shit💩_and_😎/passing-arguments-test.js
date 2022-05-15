// 💩
// function sendEmail (to, subject, content) {
//   if (to) {
//     console.log(`Sent an email to ${to}.\nSubject:${subject}\nContent:${content}`);
//   } else {
//     console.log(`Please enter a recipiant.`);
//   }
// }

// sendEmail(`abc@gmail.com`, 'Help', 'This is terrible.');

// 😎
function sendEmail ({to, subject, content}) {
  if (!to) return console.log(`Please enter a recipiant.`);
  console.log(`Sent an email to ${to}\nSubject:${subject}\nContent:${content}`);
}

sendEmail({
  to: 'abc@gmail.com',
  subject: 'Good',
  content: 'This is perfect!'
});

