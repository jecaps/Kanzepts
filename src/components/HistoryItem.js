import { NavLink } from "react-router-dom";
import { detailsPageNavigator } from "../helpers/Utils";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import AddToPlanBtn from "./AddToPlanBtn";

export default function HistoryItem({ schedule, mealtime }) {
  const { setMeal } = useContext(RecipeContext);

  return (
    <li>
      <p>{mealtime}: </p>
      <NavLink
        to={`/${schedule[mealtime].id}`}
        onClick={() => detailsPageNavigator(setMeal, schedule[mealtime])}
      >
        {schedule[mealtime].title}
      </NavLink>
      <AddToPlanBtn meal={schedule[mealtime]} />
    </li>
  );
}
