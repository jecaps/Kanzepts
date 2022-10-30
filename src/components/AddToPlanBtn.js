import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import styled from "styled-components";

export default function AddToPlanBtn({ meal }) {
  const { setMeal } = useContext(RecipeContext);
  const navigate = useNavigate();

  function addMealToPlan() {
    setMeal(meal);
    navigate("/form");
  }
  return <Button onClick={addMealToPlan}>Add To Plan</Button>;
}

const Button = styled.button`
  all: unset;
  position: absolute;
  right: 0;
  margin: 5px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 0.25rem;
  font-size: 0.75rem;

  span {
    font-size: 1.25rem;
  }
`;
