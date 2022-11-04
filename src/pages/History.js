import { nanoid } from "nanoid";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

export default function History() {
  const { mealSchedule } = useContext(RecipeContext);

  function isPast(date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(date) < today;
  }

  return (
    <div>
      {Object.keys(mealSchedule)
        .filter((mealDate) => isPast(mealDate))
        .map((mealDate) => (
          <ul key={nanoid()}>
            <p>{mealDate}</p>
            {mealSchedule[mealDate]?.breakfast && (
              <li>Breakfast: {mealSchedule[mealDate]?.breakfast["title"]}</li>
            )}
            {mealSchedule[mealDate]?.lunch && (
              <li>Lunch: {mealSchedule[mealDate]?.lunch["title"]}</li>
            )}
            {mealSchedule[mealDate]?.dinner && (
              <li>Dinner: {mealSchedule[mealDate]?.dinner["title"]}</li>
            )}
            {mealSchedule[mealDate]?.snacks && (
              <li>Snacks: {mealSchedule[mealDate]?.snacks["title"]}</li>
            )}
          </ul>
        ))}
    </div>
  );
}
