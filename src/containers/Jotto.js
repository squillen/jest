import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../components/Modal";
import Guesses from "./Guesses";
import Button from "../components/Button";
import { findCommonLetters } from "../helpers/helpers.utils.js";
import Input from "../components/Input/Input";
import SVGButton from "../components/SVGButton";

const errors = {
  1: "You can't guess numbers!",
  2: "You've already guessed that word.",
};
const secretWords = ["camping", "jotto", "italy", "pizza", "football"];
export default function Jotto() {
  const currentRoundWords = [...secretWords];
  const [secretWord, setSecretWord] = useState(getRandomWord());
  const [currentGuess, setCurrentGuess] = useState("");
  const [userGuesses, setUserGuesses] = useState({});
  const [commonLetters, setCommonLetters] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  ///////// CLICK HANDLERS
  const playAgain = () => {
    // get new word
    const newWord = getRandomWord();
    setSecretWord(newWord);

    // reset state
    setCurrentGuess("");
    setCommonLetters({});
    setSuccess(false);
    setUserGuesses({});
  };

  const handleCurrentGuess = () => {
    const guessToLowerCase = currentGuess.toLocaleLowerCase();

    // check for errors
    const isNumber = currentGuess.match(/^[0-9]/g);
    const alreadyGuessed = userGuesses[guessToLowerCase];
    const currentError = isNumber ? 1 : alreadyGuessed ? 2 : false;
    if (currentError) return setError(currentError);

    // check if won
    if (guessToLowerCase === secretWord) setSuccess(true);

    // no errors, didn't win, set guess
    setError(false);
    setCurrentGuess("");
    const newUserGuesses = {
      ...userGuesses,
      [guessToLowerCase]: guessToLowerCase,
    };
    setUserGuesses(newUserGuesses);
    const newCommonLetters = findCommonLetters(
      guessToLowerCase,
      secretWord,
      commonLetters
    );
    setCommonLetters(newCommonLetters);
  };

  function getRandomWord() {
    return currentRoundWords.splice(
      Math.floor(Math.random() * currentRoundWords.length),
      1
    )[0];
  }

  return (
    <main data-test="jotto-component" className="jotto-component">
      <header className="header">
        <h1 className="header__title">Jotto!</h1>
        <div data-test="header-description" className="header__description">
          We're thinking of a random word. <br /> Guess it!
        </div>
      </header>
      <section className="game">
        <section className="input-section">
          <Input
            value={currentGuess}
            onChange={setCurrentGuess}
            placeholder="your guess"
          />
          <SVGButton
            onClick={handleCurrentGuess}
            path="icon-magnifying-glass"
          />
        </section>
        <section className="results">
          <section className="results__word">
            <div className="results__word-letters">
              {secretWord.split("").map((l, i) => (
                <div key={`guessed-${l}-${i}`} className="letter">
                  {commonLetters[l] ? l : "_"}
                </div>
              ))}
            </div>
            {error && <center className="error">{errors[error]}</center>}
          </section>
          <Guesses secretWord={secretWord} guesses={Object.keys(userGuesses)} />
        </section>
      </section>
      <Modal showModal={success}>
        <span className="modal__text">
          By golly, you did it! The secret word was "
          <span className="secretWord">{secretWord}</span>".
        </span>
        <Button label="Play Again" onClick={playAgain} />
      </Modal>
    </main>
  );
}

Jotto.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string,
      letterMatchCount: PropTypes.number,
    })
  ),
};
