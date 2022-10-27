import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import Card from "../components/Card";
import styled from "styled-components";

export default function Home() {
  const { recipes } = useContext(RecipeContext);

  return (
    <>
      <h2>Recipes you might enjoy</h2>
      <CardsContainer>
        {recipes.map((recipe) => (
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
