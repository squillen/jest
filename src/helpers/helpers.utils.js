export function findCommonLetters(guessedWord, secretWord, commonLetters = {}) {
  return guessedWord.split("").reduce((obj, l) => {
    if (secretWord.includes(l)) obj[l] = true;
    return obj;
  }, commonLetters);
}