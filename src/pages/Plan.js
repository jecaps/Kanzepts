import { nanoid } from "nanoid";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import MealDate from "../components/MealDate";
import styled from "styled-components";
import { isPast } from "../helpers/Utils";
import Modal from "../components/Modal";

export default function Plan() {
  const { mealSchedule, showModal } = useContext(RecipeContext);
  const schedule = Object.keys(mealSchedule).filter(
    (mealDate) => !isPast(mealDate)
  );

  return (
    <PlanContainer schedule={schedule}>
      {!schedule.length && <p>No meals added to the Meal Plan yet.</p>}
      {schedule.sort().map((sched) => (
        <MealDate key={nanoid()} date={sched} />
      ))}

      {showModal && <Modal />}
    </PlanContainer>
  );
}

const PlanContainer = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  display: flex;
  align-items: center;

  // centers text when schedule is empty
  justify-content: ${({ schedule }) => (schedule.length ? "start" : "center")};

  p {
    text-align: center;
    margin: 0;
    font-weight: bold;
    color: #eee;
  }
`;
