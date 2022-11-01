import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

export default function AddToPlanBtn({ meal }) {
  const { setMeal } = useContext(RecipeContext);
  const navigate = useNavigate();

  function addMealToPlan() {
    setMeal(meal);
    navigate("/form");
  }
  return <button onClick={addMealToPlan}>Add To Plan</button>;
}
