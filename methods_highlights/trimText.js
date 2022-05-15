let text = "Hi, let me introduce myself. My name is Masashi. I'd like you to call me Mark because my friends used to call me Ma-kun. Mark sounds like Ma-kun and every time someone call me Mark, it reminds me of my friends and　I feel like a sense of closeness. So please call me Mark.I'm a web developer and my dream is to work at big tech company such as Google, Twitter and Yahoo. I've been studying English for 5 years I think... I started to study English because I love comics especially Spider-Man since I was 3 and I really wanted to read these comics but I couldn't because I didn't study English at all. So I started by reading comics. "

function trimText (text, maxLength) {
  if (!text) return;
  if (text > maxLength) {
    text = text.slice(0, maxLength) + '...';
  }
  return text;
}

console.log(trimText(text, 10));