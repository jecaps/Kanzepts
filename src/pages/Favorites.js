import { useContext } from "react";
import Card from "../components/Card";
import { RecipeContext } from "../context/RecipeContext";
import styled from "styled-components";

export default function Favorites() {
  const { recipes, setRecipes } = useContext(RecipeContext);

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
              duration={recipe.duration}
              description={recipe.summary}
              favorite={recipe.favorite}
              recipes={recipes}
              setRecipes={setRecipes}
            />
          ))}
      </CardsContainer>
    </>
  );
}

const CardsContainer = styled.ul`
  padding: 0;
`;
