// 👍
function generateId () {
  const head = Date.now().toString(36);
  const tail = Math.random().toString(36).substring(2);
  return head + tail;
}

const uuid = generateId();

console.log(uuid); // l5o94397bpur03bghcu
