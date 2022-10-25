const sentences = [
  "برنامه نویس فرانت وبسایت",
  "طراح وبسایت وردپرسی با المنتور",
  "مدرس دوره های برنامه نویسی و طراحی",
];
let currentText = "";
let letter = "";
let counter = 0;
let index = 0;
const autoTyping = document.querySelector(".auto-typing");

(function autoTypingFunction() {
  if (counter === sentences.length) counter = 0;
  currentText = sentences[counter];
  letter = currentText.slice(0, ++index);
  autoTyping.textContent = letter;
  if (letter.length === currentText.length) {
    counter++;
    index = 0;
  }

  setTimeout(autoTypingFunction, 100);
})();
