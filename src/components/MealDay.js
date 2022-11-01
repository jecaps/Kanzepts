import MealSlotCard from "./MealSlotCard";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import styled from "styled-components";

export default function MealDay({ date }) {
  const { mealSchedule } = useContext(RecipeContext);

  const el = Object.keys(mealSchedule[date]).map((slot) => (
    <MealSlotCard recipe={mealSchedule[date][slot]} slot={slot} sched={date} />
  ));

  function tellDayOfWeek() {
    let [year, month, day] = date.split("-");
    let convertedDate = new Date(`${month} ${day}, ${year}`);
    let dayOfWeek = convertedDate.getDay();

    return dayOfWeek === 0
      ? "SUN"
      : dayOfWeek === 1
      ? "MON"
      : dayOfWeek === 2
      ? "TUE"
      : dayOfWeek === 3
      ? "WED"
      : dayOfWeek === 4
      ? "THU"
      : dayOfWeek === 5
      ? "FRI"
      : "SAT";
  }

  return (
    <Container>
      <h2>{tellDayOfWeek()}</h2>
      <h3>{date.slice(5)}</h3>
      <div>{el}</div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  h2,
  h3 {
    margin: 0;
  }
`;
