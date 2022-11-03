import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

export default function MealtimeCard({ recipe, slot, sched }) {
  const { title, image, id } = recipe;
  const { mealSchedule, setMealSchedule, setMeal, setToReschedule } =
    useContext(RecipeContext);
  const navigate = useNavigate();

  function deleteSlotHandler() {
    const newMealSchedule = { ...mealSchedule };

    // Checks if a date has only one meal
    Object.values(newMealSchedule[sched]).length === 1
      ? delete newMealSchedule[sched]
      : delete newMealSchedule[sched][slot];

    setMealSchedule(newMealSchedule);
  }

  function rescheduleHandler() {
    navigate("/form");
    setMeal(recipe);
    setToReschedule({ mealDate: sched, mealtime: slot });
  }

  return (
    <SlotCardContainer>
      <div className="card">
        <img src={image} alt={title} />
        <div
          className="info"
          onClick={() => {
            navigate(`/${id}`);
            setMeal(recipe);
          }}
        >
          <h3>{title}</h3>
          <p>for</p>
          <h2>{slot.toUpperCase()}</h2>
        </div>
      </div>

      <div className="buttons">
        <EditBtn clickHandler={rescheduleHandler} />
        <DeleteBtn clickHandler={deleteSlotHandler} />
      </div>
    </SlotCardContainer>
  );
}

const SlotCardContainer = styled.section`
  position: relative;
  display: flex;
  width: 90%;
  margin: 0.5rem auto;
  border-radius: 16px;
  border: 1px solid transparent;
  overflow: hidden;

  .card {
    display: flex;
    width: 100%;

    img {
      width: 100%;
      filter: blur(3px);
    }

    .info {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      color: #eafffd;
      width: 100%;
      height: 100%;

      h2,
      h3,
      p {
        margin: 0;
        text-align: center;
      }
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: absolute;
    right: 10px;
    top: 10px;

    button {
      all: unset;
    }

    svg {
      fill: white;
      width: 15px;
    }
  }
`;
