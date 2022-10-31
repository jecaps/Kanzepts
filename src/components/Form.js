import styled from "styled-components";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

export default function Form({ scheduleMealHandler, setSlot, setDate }) {
  const { meal } = useContext(RecipeContext);

  return (
    <form onSubmit={scheduleMealHandler}>
      <fieldset>
        <legend>Plan Your Meal</legend>

        <RecipeContainer>
          <label htmlFor="recipe">Your Recipe</label>
          <p>{meal.title}</p>
        </RecipeContainer>

        <DateContainer>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </DateContainer>

        <SlotContainer>
          <label htmlFor="slots">Slot</label>
          <select
            name="slots"
            id="slots"
            onChange={(e) => setSlot(e.target.value)}
          >
            <option value="" hidden>
              Choose Slot
            </option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snacks">Snacks</option>
          </select>
        </SlotContainer>

        <button type="submit">Confirm</button>
      </fieldset>
    </form>
  );
}

const RecipeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  input {
    width: 50%;
  }
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  input {
    width: 50%;
  }
`;

const SlotContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  input {
    width: 50%;
  }
`;
