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
      <Card>
        <img src={image ?? DefaultImage} alt={title} />
        <Info
          onClick={() => {
            navigate(`/${id}`);
            setMeal(recipe);
          }}
        >
          <RecipeName>{title}</RecipeName>
          <p>for</p>
          <Slot>{slot.toUpperCase()}</Slot>
        </Info>
      </Card>

      <Buttons>
        <EditBtn clickHandler={rescheduleHandler} />
        <DeleteBtn clickHandler={deleteSlotHandler} />
      </Buttons>
    </SlotCardContainer>
  );
}

const SlotCardContainer = styled.section`
  position: relative;
  display: flex;
  width: 90vw;
  height: 12rem;
  margin: 0.5rem auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
`;

const Card = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }
`;

const Info = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: #eafffd;
  width: 100%;
  height: 100%;

  p {
    color: #eee;
    margin: 0;
    text-align: center;
  }
`;

const RecipeName = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  width: 90%;
`;

const Slot = styled.p`
  font-weight: bold;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  right: 10px;
  top: 10px;

  button {
    all: unset;
  }

  svg {
    fill: #eee;
    width: 1.5rem;
  }
`;
