import MealtimeCard from "./MealtimeCard";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { tellDayOfWeek, tellMonth } from "../helpers/Utils";
import styled from "styled-components";

export default function MealDate({ date }) {
  const { mealSchedule } = useContext(RecipeContext);

  const mealDate = mealSchedule[date];

  return (
    <Section>
      <h4 className="meal__day">{tellDayOfWeek(date)}</h4>
      <h5 className="meal__date">{`${date.slice(8)}-${tellMonth(date)}`}</h5>
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

  .meal__day {
    font-weight: 900;
    color: #d63230;
  }

  .meal__date {
    color: #7d1100;
  }

  .meal__day,
  .meal__date {
    margin: 0;
  }
`;
