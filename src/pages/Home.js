import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import styled from "styled-components";

export default function Home() {
  const { recipes } = useContext(RecipeContext);

  return (
    <>
      <h2>Recipes you might enjoy</h2>
      <Card>
        <img src={recipes[0]["image"]} alt="" />
        <h3>{recipes[0]["title"]}</h3>
        <CardDetails>
          <div>
            <p>Servings</p>
            <h4>{recipes[0]["servings"]}</h4>
          </div>
          <div>
            <p>Duration</p>
            <h4>{recipes[0]["readyInMinutes"]}min</h4>
          </div>
        </CardDetails>
        <Description>
          {recipes[0]["summary"].replace(/<\/?[^>]+(>|$)/g, "")}
        </Description>
      </Card>
    </>
  );
}

const Card = styled.article`
  margin: 0.75rem auto;
  width: 90%;
  background-color: #f2f2f2;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
  }

  h3,
  h4 {
    margin: 0;
    padding: 0.5rem 0;
  }
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-evenly;

  p {
    margin: 0;
  }
`;

const Description = styled.p`
  text-align: justify;
  margin: 0.75rem 0;
  padding: 0 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
