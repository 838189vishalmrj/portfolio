const dynamicContent = document.getElementById("dynamic-text");
console.log(dynamicContent);

const phrase = ["Software Devloper...", "Mentor...", "Human Being..."];
let phraseIndex = 0;
let letterIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 75;

function printLetters(phrase) {
  if (letterIndex == phrase.length) {
    // clear the letter which have been typed
    clearLetters();
  }

  if (letterIndex < phrase.length) {
    dynamicContent.textContent += phrase.charAt(letterIndex);
    letterIndex += 1;
    setTimeout(function () {
      printLetters(phrase);
    }, typingSpeed);
  }
}

function clearLetters() {
  if (letterIndex == -1) {
    phraseIndex = (phraseIndex + 1) % phrase.length;
    letterIndex = 0;
    printLetters(phrase[letterIndex]);
  } else if (letterIndex > -1) {
    let updatedPhrase = "";
    for (let index = 0; index < letterIndex; index++) {
      updatedPhrase += phrase[phraseIndex].charAt(index);
    }
    console.log(updatedPhrase);
    dynamicContent.textContent = updatedPhrase;
    letterIndex -= 1;
    setTimeout(clearLetters, erasingSpeed);
  }
}
printLetters(phrase[phraseIndex]);
