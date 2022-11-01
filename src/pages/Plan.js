import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

export default function Plan() {
  const { mealSchedule } = useContext(RecipeContext);

  function tellDayOfWeek(date) {
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

  const planElements = Object.keys(mealSchedule)
    .sort()
    .map((sched) => (
      <div key={sched}>
        <h3>
          {sched} {tellDayOfWeek(sched)}
        </h3>
        {mealSchedule[sched]?.breakfast && (
          <p>breakfast: {mealSchedule[sched]?.breakfast?.title}</p>
        )}
        {mealSchedule[sched]?.lunch && (
          <p>lunch: {mealSchedule[sched]?.lunch?.title}</p>
        )}
        {mealSchedule[sched]?.dinner && (
          <p>dinner: {mealSchedule[sched]?.dinner?.title}</p>
        )}
        {mealSchedule[sched]?.snacks && (
          <p>snacks: {mealSchedule[sched]?.snacks?.title}</p>
        )}
      </div>
    ));

  return <>{planElements}</>;
}
