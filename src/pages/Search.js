import { RecipeContext } from "../context/RecipeContext";
import { useContext } from "react";
import Modal from "../components/Modal";
import Card from "../components/Card";
import GoBack from "../components/GoBack";
import styled from "styled-components";

export default function Search() {
  const { results, isLoading, prevQuery, showModal } =
    useContext(RecipeContext);

  return (
    <CardsContainer>
      <GoBack />
      {!isLoading ? (
        <>
          <h2>
            {results.length
              ? `Results from "${prevQuery.current}"`
              : `"${prevQuery.current}" not found`}
          </h2>
          {results.map((result) => (
            <Card key={result.id} recipe={result} />
          ))}
        </>
      ) : (
        <h2>Loading...</h2>
      )}

      {showModal && <Modal />}
    </CardsContainer>
  );
}

const CardsContainer = styled.ul`
  padding: 0;
  position: relative;

  h2 {
    padding-top: 1rem;
    margin: 0;
    color: #273043;
  }

  .back-btn {
    position: absolute;
    top: 1.25rem;
    left: 1.5rem;
    background-color: rgba(39, 48, 67, 0.7);
    width: 1.25rem;
    height: 1.25rem;
    padding: 0.25rem;
    border-radius: 50%;

    svg {
      width: 1.25rem;
      fill: #eee;
      stroke: #eee;
    }
  }
`;
