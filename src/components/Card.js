import FaveBtn from "./FaveBtn";
import styled from "styled-components";

export default function Card({ recipe }) {
  return (
    <StyledCard>
      <FaveBtn id={recipe.id} isFavorite={recipe.isFavorite} />
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <CardDetails>
        <div>
          <p>Servings</p>
          <h4>{recipe.servings}</h4>
        </div>
        <div>
          <p>Duration</p>
          <h4>{recipe.readyInMinutes}min</h4>
        </div>
      </CardDetails>
      {/* .replace() is used to remove html tags from the text*/}
      <Description>{recipe.summary.replace(/<\/?[^>]+(>|$)/g, "")}</Description>
    </StyledCard>
  );
}

const StyledCard = styled.li`
  position: relative;
  list-style: none;
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
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
