export default function Form() {
  return (
    <form>
      <fieldset>
        <legend>Plan Your Meal</legend>

        <div>
          <label htmlFor="date">Planned Date</label>
          <input type="date" id="date" />
        </div>
      </fieldset>
    </form>
  );
}
