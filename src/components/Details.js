import Ingredient from "./Ingredient";
import Instruction from "./Instruction";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { nanoid } from "nanoid";

export default function Details() {
  const { recipes, favorites } = useContext(RecipeContext);
  const { id } = useParams();

  const RECIPE =
    recipes.filter((recipe) => recipe.id === Number(id))[0] ??
    favorites.filter((favorites) => favorites.id === Number(id))[0];

  console.log(RECIPE);
  const {
    image,
    title,
    readyInMinutes,
    servings,
    extendedIngredients,
    summary,
    healthScore,
    analyzedInstructions,
  } = RECIPE;

  return (
    <DetailsContainer>
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
  );
}

const DetailsContainer = styled.div`
  width: 95%;
  margin: auto;

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
