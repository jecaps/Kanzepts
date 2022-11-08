import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import Card from "../components/Card";
import styled from "styled-components";

export default function Home() {
  const { recipes } = useContext(RecipeContext);

  return (
    <CardsContainer>
      <h2 className="home__title">Recipes you might enjoy</h2>
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </CardsContainer>
  );
}

const CardsContainer = styled.ul`
  padding: 0;

  .home__title {
    padding-top: 1rem;
    color: #691e06;
  }
`;
