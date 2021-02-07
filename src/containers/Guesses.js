export default function Guesses({ secretWord, guesses }) {
  return (
    <section className="guesses">
      <div className="guesses__text"></div>
      <div className="guesses__words">
        {
          guesses.map(w => (
            <div key={w} className="guesses__word">
              {
                w.split('').map((l, idx) => (
                  <span key={`${l}-${idx}`} className={`letter ${secretWord.includes(l) ? 'match' : 'wrong'}`}>{l}</span>
                ))
              }
            </div>
          ))
        }
      </div>
    </section>
  );
}
