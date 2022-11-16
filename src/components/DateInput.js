export default function DateInput({ setDate }) {
  return (
    <div>
      <label htmlFor="date">Date</label>
      <input
        min={new Date().toISOString().substring(0, 10)}
        onChange={(e) => setDate(e.target.value)}
        type="date"
        id="date"
        required
      ></input>
    </div>
  );
}
