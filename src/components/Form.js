import styled from "styled-components";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

export default function Form({ scheduleMealHandler, setSlot, date, setDate }) {
  const { meal, mealSchedule } = useContext(RecipeContext);

  // function that disables date picking in the past dates
  function getDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    return `${year}-${month}-${day}`;
  }

  // avoids overwriting meal slot on a date
  function slotChecker(e) {
    const selectedSlot = e.target.value;
    if (date in mealSchedule && selectedSlot in mealSchedule[date]) {
      e.target.value = "";
      alert(`${selectedSlot} has already been added for this day`);
    } else {
      setSlot(selectedSlot);
    }
  }

  return (
    <FormContainer onSubmit={scheduleMealHandler}>
      <fieldset>
        <legend>
          <h3>Plan Your Meal</h3>
        </legend>

        <div>
          <label htmlFor="recipe">Your Recipe</label>
          <h4>{meal.title}</h4>
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min={getDate()}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="slots">Slot</label>
          <select name="slots" id="slots" onChange={slotChecker} required>
            <option value="" hidden>
              Choose Slot
            </option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snacks">Snacks</option>
          </select>
        </div>

        <button type="submit">Confirm</button>
      </fieldset>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 90%;
  margin: auto;

  fieldset {
    border-radius: 0.5rem;
  }

  legend {
    text-align: left;
  }

  h4 {
    margin: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    input,
    select {
      width: 50%;
    }
  }
`;
