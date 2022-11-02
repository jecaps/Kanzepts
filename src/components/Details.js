import Ingredient from "./Ingredient";
import Instruction from "./Instruction";
import GoBack from "./GoBack";
import AddToPlantBtn from "./AddToPlanBtn";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import styled from "styled-components";
import { nanoid } from "nanoid";

export default function Details() {
  const { meal } = useContext(RecipeContext);

  const {
    image,
    title,
    readyInMinutes,
    servings,
    extendedIngredients,
    summary,
    healthScore,
    analyzedInstructions,
  } = meal;

  return (
    <>
      <GoBack />
      <DetailsContainer>
        <AddToPlantBtn meal={meal} />
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <BasicDetails>
          <p>{readyInMinutes}min.</p>
          <p>{servings} servings</p>
          <p>health score {healthScore}</p>
        </BasicDetails>
        <Summary>{summary.replace(/<\/?[^>]+(>|$)/g, "")}</Summary>
        <div>
          <h3>Ingredients</h3>
          {extendedIngredients.map((ingredient) => (
            <Ingredient key={nanoid()} ingredient={ingredient} />
          ))}
        </div>
        <div>
          <h3>Instructions</h3>
          {analyzedInstructions[0].steps.map((instruction) => (
            <Instruction key={instruction.number} instruction={instruction} />
          ))}
        </div>
      </DetailsContainer>
    </>
  );
}

const DetailsContainer = styled.div`
  position: relative;
  width: 95%;
  margin: auto;

  button {
    all: unset;
    position: absolute;
    right: 5px;
    top: 2.5px;
    background-color: #fff;
    padding: 0.25rem 0.5rem;
    border: 1px solid gray;
    border-radius: 8px;
  }

  h2 {
    margin: 0;
    padding: 0.5rem;
  }

  img {
    width: 98%;
  }

  p {
    margin: 0;
    padding: 5px 0;
    text-align: left;
  }
`;

const BasicDetails = styled.div`
  display: flex;
  justify-content: space-around;
  color: #50514f;
`;

const Summary = styled.p`
  text-align: left;
  padding: 0 0.5rem;
`;
