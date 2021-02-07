import { useState } from "react";
import PropTypes from "prop-types";
import Congrats from "./Congrats";
import Guesses from "./Guesses";

const errors = {
  1: "You can't guess numbers!",
  2: "You've already guessed that word.",
};

export default function Jotto() {
  const secretWord = "camping";
  const [currentGuess, setCurrentGuess] = useState("");
  const [userGuesses, setUserGuesses] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [commonLetters, setCommonLetters] = useState({});

  ///////// CLICK HANDLERS
  const playAgain = () => {};

  const handleCurrentGuess = () => {
    const guessToLowerCase = currentGuess.toLocaleLowerCase();

    // check for errors
    const isNumber = currentGuess.match(/^[0-9]/g);
    const alreadyGuessed = userGuesses[guessToLowerCase];
    const currentError = isNumber ? 1 : alreadyGuessed ? 2 : false;
    if (currentError) return setError(currentError);
    if (guessToLowerCase === secretWord) {
      setSuccess(true);
      setUserGuesses({});
    }
    // no errors, set guess
    setError(false);
    setCurrentGuess("");
    const newUserGuesses = {
      ...userGuesses,
      [guessToLowerCase]: guessToLowerCase,
    };
    setUserGuesses(newUserGuesses);
    const newCommonLetters = guessToLowerCase.split("").reduce((obj, l) => {
      if (secretWord.includes(l)) obj[l] = true;
      return obj;
    }, commonLetters);
    setCommonLetters(newCommonLetters);
  };

  return (
    <main data-test="jotto-component" className="jotto-component">
      <header className="header">
        <h1 className="header__title">Jotto!</h1>
        <div data-test="header-description" className="header__description">
          We're thinking of a random word. <br /> Guess it!
        </div>
      </header>
      <section className="game">
        <section action="#" className="input-section">
          <input
            onChange={(e) => setCurrentGuess(e.target.value)}
            className="input-section__input"
            type="text"
            value={currentGuess}
            placeholder="your guess"
          />
          <button onClick={handleCurrentGuess} className="input-section__btn">
            <svg className="input-section__icon">
              <use xlinkHref="img/sprite.svg#icon-magnifying-glass" />
            </svg>
          </button>
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
      <Congrats
        success={success}
        secretWord={secretWord}
        handleClick={playAgain}
      />
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
