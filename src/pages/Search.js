import Card from "../components/Card";
import { RecipeContext } from "../context/RecipeContext";
import { useContext } from "react";
import styled from "styled-components";

export default function Search() {
  const { results, query } = useContext(RecipeContext);

  return (
    <>
      <h2>
        {results.length ? `Results from "${query}"` : `"${query}" not found`}
      </h2>
      <CardsContainer>
        {results.map((result) => (
          <Card key={result.id} recipe={result} />
        ))}
      </CardsContainer>
    </>
  );
}

const CardsContainer = styled.ul`
  padding: 0;
`;
