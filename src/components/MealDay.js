import { nanoid } from "nanoid";
import MealSlotCard from "./MealSlotCard";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import styled from "styled-components";

export default function MealDay({ date }) {
  const { mealSchedule } = useContext(RecipeContext);

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
      <h4>{tellDayOfWeek()}</h4>
      <h5>{date.slice(5)}</h5>
      <div>
        <div>
          {Object.keys(mealSchedule[date]).map((slot) => (
            <MealSlotCard
              key={nanoid()}
              recipe={mealSchedule[date][slot]}
              slot={slot}
              sched={date}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 90vh;
  scroll-snap-align: center;

  h5,
  h4 {
    margin: 0;
  }
`;
