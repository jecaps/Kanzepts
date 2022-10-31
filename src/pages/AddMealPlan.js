import Form from "../components/Form";
import { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";

export default function AddMealPlan() {
  const [slot, setSlot] = useState("");
  const [date, setDate] = useState("");
  const { meal, mealSchedule, setMealSchedule } = useContext(RecipeContext);

  // function createMealObj() {
  //   return;
  // }

  function scheduleMealHandler(e) {
    e.preventDefault();
    setMealSchedule({ ...mealSchedule, [date]: { [slot]: meal } });
  }

  return (
    <div>
      <Form
        scheduleMealHandler={scheduleMealHandler}
        setSlot={setSlot}
        setDate={setDate}
      />
    </div>
  );
}
