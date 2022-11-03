import Form from "../components/Form";
import { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";

export default function AddMealPlan() {
  const [slot, setSlot] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const {
    meal,
    setMeal,
    mealSchedule,
    setMealSchedule,
    toReschedule,
    setToReschedule,
  } = useContext(RecipeContext);
  const { mealDate, mealtime } = toReschedule;

  function scheduleMealHandler(e) {
    e.preventDefault();

    if (!Object.keys(meal).length) {
      alert("Please select a recipe you want to schedule.");
    } else {
      !mealSchedule.hasOwnProperty(date)
        ? setMealSchedule({ ...mealSchedule, [date]: { [slot]: meal } })
        : setMealSchedule({
            ...mealSchedule,
            [date]: { ...mealSchedule[date], [slot]: meal },
          });
      navigate("/plan");
      setMeal({});
      e.target.reset();
    }
  }

  function rescheduleHandler() {
    const newMealSchedule = { ...mealSchedule };

    // Checks if a date has only one meal
    Object.values(newMealSchedule[mealDate]).length === 1
      ? delete newMealSchedule[mealDate]
      : delete newMealSchedule[mealDate][mealtime];

    !newMealSchedule.hasOwnProperty(date)
      ? setMealSchedule({ ...newMealSchedule, [date]: { [slot]: meal } })
      : setMealSchedule({
          ...newMealSchedule,
          [date]: { ...newMealSchedule[date], [slot]: meal },
        });

    navigate("/plan");
    setToReschedule({});
    setMeal({});
  }

  return (
    <div>
      <Form
        scheduleMealHandler={scheduleMealHandler}
        rescheduleHandler={rescheduleHandler}
        setSlot={setSlot}
        date={date}
        setDate={setDate}
      />
    </div>
  );
}
