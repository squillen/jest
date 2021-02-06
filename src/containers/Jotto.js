import { useEffect, useState } from "react";

const errors = {
  1: "You can't guess numbers!",
  2: "You've already guessed that letter.",
};

const alphabet = "abcdefghijklmnopqrstuvwxyz";

export default function Jotto() {
  const secretWord = "camping";
  const [currentGuess, setCurrentGuess] = useState("");
  const [userGuesses, setUserGuesses] = useState({});
  const [error, setError] = useState(false);
  const [remainingLetters, setRemainingLetters] = useState(
    secretWord.split("")
  );

  const handleCurrentGuess = (e, letter) => {
    const guess = letter || currentGuess;
    const guessToLowerCase = guess.toLocaleLowerCase();

    // check for errors
    const isNumber = guess.match(/^[0-9]/);
    const alreadyGuessed = userGuesses[guessToLowerCase];
    let currentError = isNumber ? 1 : alreadyGuessed ? 2 : false;
    if (currentError) return setError(currentError);

    setError(false);
    setCurrentGuess("");
    const newRemainingLetters = remainingLetters.filter(
      (l) => l !== guessToLowerCase
    );
    setRemainingLetters(newRemainingLetters);
    const newUserGuesses = { ...userGuesses, [guessToLowerCase]: true };
    setUserGuesses(newUserGuesses);
  };

  useEffect(() => {
    if (remainingLetters.length === 0) {
      // congratulate person
      setUserGuesses({});
    }
  }, [remainingLetters])

  return (
    <main className="jotto-component">
      <header className="header">
        <h1 className="header__title">Jotto!</h1>
        <div className="header__description">
          We're thinking of a random word. <br /> Guess its letters!
        </div>
      </header>
      <section className="game">
        <section action="#" className="input-section">
          <input
            onChange={(e) => setCurrentGuess(e.target.value)}
            maxLength="1"
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
                  {userGuesses[l] ? l : "_"}
                </div>
              ))}
            </div>
          </section>
          {
            <section className="guesses">
              <div className="guesses__text"></div>
              <div className="guesses__letters">
                {alphabet.split("").map((l) => (
                  <div
                    onClick={() => handleCurrentGuess(null, l)}
                    key={`remaining-${l}`}
                    className={`letter ${userGuesses[l] ? "guessed" : ""}`}
                  >
                    {l}
                  </div>
                ))}
              </div>
            </section>
          }
        </section>
      </section>
      {error && <center className="error">{errors[error]}</center>}
    </main>
  );
}
