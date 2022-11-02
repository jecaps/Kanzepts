import { nanoid } from "nanoid";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import MealDate from "../components/MealDate";
import styled from "styled-components";

export default function Plan() {
  const { mealSchedule } = useContext(RecipeContext);

  return (
    <Container>
      {Object.keys(mealSchedule)
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
`;
