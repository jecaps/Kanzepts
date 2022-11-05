import { nanoid } from "nanoid";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { isPast } from "../helpers/Utils";
import AddToPlanBtn from "../components/AddToPlanBtn";
import { NavLink } from "react-router-dom";
import { detailsPageNavigator } from "../helpers/Utils";

export default function History() {
  const { mealSchedule, setMeal } = useContext(RecipeContext);

  return (
    <div>
      {Object.keys(mealSchedule)
        .filter((mealDate) => isPast(mealDate))
        .map((mealDate) => {
          const schedule = mealSchedule[mealDate];

          return (
            <ul key={nanoid()}>
              <p>{mealDate}</p>
              {schedule?.breakfast && (
                <li>
                  <p>
                    Breakfast:{" "}
                    <NavLink
                      to={`/${schedule.breakfast.id}`}
                      onClick={() =>
                        detailsPageNavigator(setMeal, schedule.breakfast)
                      }
                    >
                      {schedule.breakfast.title}
                    </NavLink>
                  </p>
                  <AddToPlanBtn meal={schedule["breakfast"]} />
                </li>
              )}

              {schedule?.lunch && (
                <li>
                  <p>
                    Lunch:{" "}
                    <NavLink
                      to={`/${schedule.lunch.id}`}
                      onClick={() =>
                        detailsPageNavigator(setMeal, schedule.lunch)
                      }
                    >
                      {schedule.lunch.title}
                    </NavLink>
                  </p>
                  <AddToPlanBtn meal={schedule.lunch} />
                </li>
              )}

              {schedule?.dinner && (
                <li>
                  <p>
                    Dinner:{" "}
                    <NavLink
                      to={`/${schedule.dinner.id}`}
                      onClick={() =>
                        detailsPageNavigator(setMeal, schedule.dinner)
                      }
                    >
                      {schedule.dinner.title}
                    </NavLink>
                  </p>
                  <AddToPlanBtn meal={schedule["dinner"]} />
                </li>
              )}

              {schedule?.snacks && (
                <li>
                  <p>
                    Snacks:{" "}
                    <NavLink
                      to={`/${schedule.snacks.id}`}
                      onClick={() =>
                        detailsPageNavigator(setMeal, schedule.snacks)
                      }
                    >
                      {schedule.snacks.title}
                    </NavLink>
                  </p>
                  <AddToPlanBtn meal={schedule["snacks"]} />
                </li>
              )}
            </ul>
          );
        })}
    </div>
  );
}
