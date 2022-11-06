import { nanoid } from "nanoid";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import MealDate from "../components/MealDate";
import styled from "styled-components";
import { isPast } from "../helpers/Utils";

export default function Plan() {
  const { mealSchedule } = useContext(RecipeContext);

  return (
    <Container>
      {!Object.values(mealSchedule).length && (
        <h2>No meals added to the Meal Plan yet.</h2>
      )}
      {Object.keys(mealSchedule)
        .filter((mealDate) => !isPast(mealDate))
        .sort()
        .map((sched) => (
          <MealDate key={nanoid()} date={sched} />
        ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  display: flex;

  h2 {
    padding: 10px;
    margin: 0;
  }
`;
