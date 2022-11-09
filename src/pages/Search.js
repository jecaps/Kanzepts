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
    <>
      <CardsContainer>
        <GoBack />
        {!isLoading ? (
          <>
            <h2 className="search__title">
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
    </>
  );
}

const CardsContainer = styled.ul`
  padding: 0;
  position: relative;

  .search__title {
    padding-top: 1rem;
    margin: 0;
    color: #691e06;
  }

  .back-btn {
    position: absolute;
    display: flex;
    left: 0.75rem;
    top: 0;
    font-size: 0.85rem;
    padding: 0.5rem 0.25rem;
    color: #db4200;

    svg {
      width: 1.25rem;
      fill: #db4200;
    }
  }
`;
