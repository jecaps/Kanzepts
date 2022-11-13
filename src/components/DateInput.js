export default function DateInput({ setDate }) {
  return (
    <div>
      <input
        min={new Date().toISOString().substring(0, 10)}
        onChange={(e) => setDate(e.target.value)}
        placeholder="dd.mm.yyyy"
        type="date"
        id="date"
        required
      ></input>
    </div>
  );
}
