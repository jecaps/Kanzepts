import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import Card from "../components/Card";
import styled from "styled-components";
import Modal from "../components/Modal";

export default function Favorites() {
  const { favorites, showModal } = useContext(RecipeContext);

  return (
    <CardsContainer>
      {favorites.length ? (
        <h2 className="favorites__title">Your Favorites</h2>
      ) : (
        <h2 className="favorites__title">You do not have favorites</h2>
      )}
      {favorites.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}

      {showModal && <Modal />}
    </CardsContainer>
  );
}

const CardsContainer = styled.ul`
  padding: 0;

  .favorites__title {
    padding-top: 1rem;
    color: #691e06;
  }
`;
