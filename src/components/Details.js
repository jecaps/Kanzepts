import Ingredient from "./Ingredient";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Details() {
  const { recipes } = useContext(RecipeContext);
  const { id } = useParams();

  const RECIPE = recipes.filter((recipe) => recipe.id === Number(id))[0];
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
    <div>
      <Image src={image} alt={title} />
      <h2>{title}</h2>
      <div>
        <p>{readyInMinutes}min.</p>
        <p>{servings} servings</p>
        <p>health score {healthScore}</p>
      </div>
      <p>{summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
      {extendedIngredients.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          name={ingredient.name}
          unit={ingredient.unit}
          amount={ingredient.amount}
        />
      ))}
    </div>
  );
}

const Image = styled.img`
  width: 90%;
`;
