import Form from "../components/Form";
import { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";

export default function AddMealPlan() {
  const [slot, setSlot] = useState("");
  const [date, setDate] = useState("");
  const { meal, setMeal, mealSchedule, setMealSchedule } =
    useContext(RecipeContext);

  console.log(meal);

  function scheduleMealHandler(e) {
    e.preventDefault();

    if (!mealSchedule.hasOwnProperty(date)) {
      setMealSchedule({ ...mealSchedule, [date]: { [slot]: meal } });
    } else {
      if (!mealSchedule[date].hasOwnProperty(slot)) {
        setMealSchedule({
          [date]: { ...mealSchedule[date], [slot]: meal },
        });
      } else {
        setMealSchedule({ [date]: { ...mealSchedule[date], [slot]: meal } });
      }
    }
    setMeal({});
    e.target.reset();
  }

  return (
    <div>
      <Form
        scheduleMealHandler={scheduleMealHandler}
        setSlot={setSlot}
        setDate={setDate}
      />
      {!Object.keys(meal).length && <p>Please add a recipe!</p>}
    </div>
  );
}
