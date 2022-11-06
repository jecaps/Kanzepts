import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { AddCalendarIcon } from "./Icons";
import styled from "styled-components";

export default function AddToPlanBtn({ meal }) {
  const { setMeal } = useContext(RecipeContext);
  const navigate = useNavigate();

  function addMealToPlan() {
    setMeal(meal);
    navigate("/form");
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
