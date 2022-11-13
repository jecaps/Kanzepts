export default function DateInput({ setDate }) {
  return (
    <div>
      <input
        className="form__input"
        type="date"
        id="date"
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => setDate(e.target.value)}
        onfocus="(this.type='date')"
        required
      />
    </div>
  );
}
