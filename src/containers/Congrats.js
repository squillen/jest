export default function Congrats({ success, secretWord }) {
  return success ? (
    <div data-test="congrats-component">
      <span>
        Congrats! The secret word was "
        <span className="secretWord">{secretWord}</span>"
      </span>
    </div>
  ) : (
    <div data-test="congrats-component"></div>
  );
}
