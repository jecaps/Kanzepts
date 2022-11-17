import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import Card from "../components/Card";
import styled from "styled-components";
import Modal from "../components/Modal";

export default function Home() {
  const { recipes, showModal } = useContext(RecipeContext);

  return (
    <CardsContainer>
      <h2>Recipes you might enjoy</h2>
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
      {showModal && <Modal />}
    </CardsContainer>
  );
}

const CardsContainer = styled.ul`
  padding: 0;
  padding-bottom: 0.5rem;

  h2 {
    padding-top: 1rem;
    color: #273043;
  }
`;
