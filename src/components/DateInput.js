export default function DateInput({ setDate }) {
  return (
    <div>
      <input type="date" id="date" onfocus="(this.type='date')" required />
      <input
        min={new Date().toISOString().substring(0, 10)}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Type Date"
        type="text"
        onfocus="(this.type = 'date')"
        id="date"
      ></input>
    </div>
  );
}
