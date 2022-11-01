import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import MealDay from "../components/MealDay";
import styled from "styled-components";

export default function Plan() {
  const { mealSchedule } = useContext(RecipeContext);

  const planEl = Object.keys(mealSchedule).map((sched) => (
    <MealDay key={Object.keys(mealSchedule[sched])} date={sched} />
  ));

  return <Container>{planEl}</Container>;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  display: flex;
`;
