import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import Card from "../components/Card";
import styled from "styled-components";

export default function Favorites() {
  const { recipes } = useContext(RecipeContext);

  return (
    <>
      <h2>Your Favorites</h2>
      <CardsContainer>
        {recipes
          .filter((recipe) => recipe.favorite)
          .map((recipe) => (
            <Card key={recipe.id} recipe={recipe} />
          ))}
      </CardsContainer>
    </>
  );
}

const CardsContainer = styled.ul`
  padding: 0;
`;
