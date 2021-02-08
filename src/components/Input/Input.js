export default function Input({ value, onChange, placeholder }) {
  return (
      <input
        onChange={(e) => onChange(e.target.value)}
        className="input-section__input"
        type="text"
        value={value}
        placeholder={placeholder}
      />
  );
}
