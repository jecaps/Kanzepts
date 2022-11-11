export default function DateInput({ setDate }) {
  return (
    <div className="form__input-container">
      <label className="form__label" htmlFor="date">
        Date
      </label>
      <input
        className="form__input"
        type="date"
        id="date"
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => setDate(e.target.value)}
        required
      />
    </div>
  );
}
