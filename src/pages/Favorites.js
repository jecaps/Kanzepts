import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import Card from "../components/Card";
import styled from "styled-components";

export default function Favorites() {
  const { favorites } = useContext(RecipeContext);

  return (
    <>
      {favorites.length ? (
        <h2>Your Favorites</h2>
      ) : (
        <h2>You do not have favorites</h2>
      )}
      <CardsContainer>
        {favorites.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </CardsContainer>
    </>
  );
}

const CardsContainer = styled.ul`
  padding: 0;
`;
