import Card from "../components/Card";
import { RecipeContext } from "../context/RecipeContext";
import { useContext } from "react";
import styled from "styled-components";

export default function Search() {
  const { results, isLoading, prevQuery } = useContext(RecipeContext);

  return (
    <>
      {!isLoading ? (
        <>
          <h2>
            {results.length
              ? `Results from "${prevQuery.current}"`
              : `"${prevQuery.current}" not found`}
          </h2>
          <CardsContainer>
            {results.map((result) => (
              <Card key={result.id} recipe={result} />
            ))}
          </CardsContainer>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}

const CardsContainer = styled.ul`
  padding: 0;
`;
