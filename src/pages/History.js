import { nanoid } from "nanoid";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { isPast } from "../helpers/Utils";
import HistoryItem from "../components/HistoryItem";

export default function History() {
  const { mealSchedule } = useContext(RecipeContext);

  return (
    <>
      {Object.keys(mealSchedule)
        .filter((mealDate) => isPast(mealDate))
        .sort()
        .map((mealDate) => {
          const schedule = mealSchedule[mealDate];

          return (
            <ul key={nanoid()}>
              <p>{mealDate}</p>
              {schedule?.breakfast && (
                <HistoryItem schedule={schedule} mealtime={"breakfast"} />
              )}
              {schedule?.lunch && (
                <HistoryItem schedule={schedule} mealtime={"lunch"} />
              )}
              {schedule?.dinner && (
                <HistoryItem schedule={schedule} mealtime={"dinner"} />
              )}
              {schedule?.snacks && (
                <HistoryItem schedule={schedule} mealtime={"snacks"} />
              )}
            </ul>
          );
        })}
    </>
  );
}
