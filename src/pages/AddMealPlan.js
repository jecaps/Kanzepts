import Form from "../components/Form";
import { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";

export default function AddMealPlan() {
  const [slot, setSlot] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const { meal, setMeal, mealSchedule, setMealSchedule } =
    useContext(RecipeContext);

  function scheduleMealHandler(e) {
    e.preventDefault();

    if (!Object.keys(meal).length) {
      alert("Please select a recipe you want to schedule.");
    } else {
      if (!mealSchedule.hasOwnProperty(date)) {
        setMealSchedule({ ...mealSchedule, [date]: { [slot]: meal } });
      } else {
        setMealSchedule({
          ...mealSchedule,
          [date]: { ...mealSchedule[date], [slot]: meal },
        });
      }
      navigate("/plan");
      setMeal({});
      e.target.reset();
    }
  }

  return (
    <div>
      <Form
        scheduleMealHandler={scheduleMealHandler}
        setSlot={setSlot}
        date={date}
        setDate={setDate}
      />
    </div>
  );
}
