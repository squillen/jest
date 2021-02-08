export default function SVGButton({ onClick, path }) {
  return (
    <button onClick={onClick} className="input-section__btn">
      <svg className="input-section__icon">
        <use xlinkHref={`img/sprite.svg#${path}`} />
      </svg>
    </button>
  );
}
