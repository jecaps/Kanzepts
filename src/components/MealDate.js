import MealtimeCard from "./MealtimeCard";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import styled from "styled-components";

export default function MealDate({ date }) {
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

  const mealDate = mealSchedule[date];

  return (
    <Section>
      <h4>{tellDayOfWeek()}</h4>
      <h5>{date.slice(5)}</h5>
      <div>
        {mealDate?.breakfast && (
          <MealtimeCard
            recipe={mealDate?.breakfast}
            slot={"breakfast"}
            sched={date}
          />
        )}
        {mealDate?.lunch && (
          <MealtimeCard recipe={mealDate?.lunch} slot={"lunch"} sched={date} />
        )}
        {mealDate?.dinner && (
          <MealtimeCard
            recipe={mealDate?.dinner}
            slot={"dinner"}
            sched={date}
          />
        )}
        {mealDate?.snacks && (
          <MealtimeCard
            recipe={mealDate?.snacks}
            slot={"snacks"}
            sched={date}
          />
        )}
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
    color: #7d1100;
  }
`;
