import { nanoid } from "nanoid";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { isPast } from "../helpers/Utils";

export default function History() {
  const { mealSchedule } = useContext(RecipeContext);

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
