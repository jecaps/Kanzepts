import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import DefaultImage from "../image/default-placeholder.png";

export default function MealtimeCard({ recipe, slot, sched }) {
  const { title, image, id } = recipe;
  const {
    mealSchedule,
    setMealSchedule,
    setMeal,
    setToReschedule,
    setShowModal,
  } = useContext(RecipeContext);
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
    setMeal(recipe);
    setToReschedule({ mealDate: sched, mealtime: slot });
    setShowModal(true);
  }

  return (
    <SlotCardContainer>
      <div className="card">
        <img className="card__img" src={image ?? DefaultImage} alt={title} />
        <div
          className="card__info"
          onClick={() => {
            navigate(`/${id}`);
            setMeal(recipe);
          }}
        >
          <p className="card__title">{title}</p>
          <p>for</p>
          <p className="card__slot">{slot.toUpperCase()}</p>
        </div>
      </div>

      <div className="card__buttons">
        <EditBtn clickHandler={rescheduleHandler} />
        <DeleteBtn clickHandler={deleteSlotHandler} />
      </div>
    </SlotCardContainer>
  );
}

const SlotCardContainer = styled.section`
  position: relative;
  display: flex;
  width: 90vw;
  height: 12rem;
  margin: 0.5rem auto;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  box-shadow: 1px 2px 4px #777;
  overflow: hidden;

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .card__img {
      position: absolute;
      width: 100%;
      height: 100%;
      filter: blur(1.5px);
      z-index: -1;
      object-fit: cover;
    }

    .card__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      color: #eafffd;
      width: 100%;
      height: 100%;

      .card__title,
      .card__slot,
      p {
        color: #fffcdd;
        margin: 0;
        text-align: center;
      }

      .card__title {
        font-size: 1.25rem;
        font-weight: bold;
        width: 90%;
      }

      .card__slot {
        font-weight: bold;
      }
    }
  }

  .card__buttons {
    display: flex;
    gap: 10px;
    position: absolute;
    right: 10px;
    top: 10px;

    button {
      all: unset;
    }

    svg {
      fill: #e6e8e6;
      width: 1.1rem;
    }
  }
`;
