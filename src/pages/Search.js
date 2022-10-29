import Card from "../components/Card";
import { RecipeContext } from "../context/RecipeContext";
import { useContext } from "react";
import styled from "styled-components";

export default function Search() {
  const { results, query } = useContext(RecipeContext);

  console.log(results);

  return (
    <>
      <h2>Results from "{query}"</h2>
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
