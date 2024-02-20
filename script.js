// const words = 'a about all also and as at be because but by can come could day do even find first for from get give go have he her here him his how I if in into it its just know like look make man many me more my new no not now of on one only or other our out people say see she so some take tell than that the their them then there these they thing think this those time to two up use very want way we well what when which who will with would year you your';

const quotes = [
  "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
  "There is nothing more deceptive than an obvious fact.",
  "I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.",
  "I never make exceptions. An exception disproves the rule.",
  "What one man can invent another can discover.",
  "Nothing clears up a case so much as stating it to another person.",
  "Education never ends, Watson. It is a series of lessons, with the greatest for the last.",
];

const input = document.querySelector("input");
const quote = document.querySelector("#quote");
const result = document.querySelector("#result");

const words = getRandomItem(quotes).split(" ");
quote.innerHTML = spanWrap(words);

const wordSpans = quote.querySelectorAll("span");

let wordIndex = 0;
wordSpans[wordIndex].classList.add("highlight");

let startTime;

input.addEventListener("focus", () => {
  startTime = new Date().getTime();
});

input.addEventListener("input", () => {
  const word = words[wordIndex];
  const { value } = input;

  if (!word.includes(value)) {
    input.classList.add("error");
  } else {
    input.classList.remove("error");
    if (value === word) {
      wordSpans[wordIndex].classList.remove("highlight");
      input.value = "";
      if (wordIndex === words.length - 1) {
        const endTime = new Date().getTime();
        const seconds = (endTime - startTime) / 1000;
        const minutes = seconds / 60;
        const speed = words.length / minutes;
        result.innerText = `Speed: ${speed.toFixed(0)} WPM`;
      } else {
        wordIndex++;
        wordSpans[wordIndex].classList.add("highlight");
      }
    }
  }
});

function getRandomItem(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function spanWrap(text) {
  return text.map((word) => `<span>${word}</span>`).join("\n");
}
