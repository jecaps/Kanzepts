import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { AddCalendarIcon } from "./Icons";
import styled from "styled-components";

export default function AddToPlanBtn({ meal }) {
  const { setMeal, setShowModal } = useContext(RecipeContext);

  function addMealToPlan() {
    setMeal(meal);
    setShowModal(true);
  }
  return (
    <Button className="add-btn" onClick={addMealToPlan}>
      <AddCalendarIcon />
    </Button>
  );
}

const Button = styled.button`
  all: unset;
`;
