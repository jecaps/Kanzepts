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
    <Section>
      <h2>{tellDayOfWeek()}</h2>
      <h3>{date.slice(5)}</h3>
      <div>
        <div>{el}</div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  flex: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 90vh;
  scroll-snap-align: center;

  h2,
  h3 {
    margin: 0;
    text-align: center;
  }
`;
