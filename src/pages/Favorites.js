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
            <Card
              key={recipe.id}
              id={recipe.id}
              image={recipe.image}
              title={recipe.title}
              servings={recipe.servings}
              duration={recipe.readyInMinutes}
              description={recipe.summary}
              favorite={recipe.favorite}
            />
          ))}
      </CardsContainer>
    </>
  );
}

const CardsContainer = styled.ul`
  padding: 0;
`;
