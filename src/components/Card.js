import { NavLink } from "react-router-dom";
import FaveBtn from "./FaveBtn";
import styled from "styled-components";
import AddToPlanBtn from "./AddToPlanBtn";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

export default function Card({ recipe }) {
  const { setRecipeDetail } = useContext(RecipeContext);
  const { id, image, title, servings, readyInMinutes, summary } = recipe;

  // scroll to top when visiting the recipe details page
  function clickHandler() {
    window.scrollTo({ top: 0, left: 0 });
    setRecipeDetail(recipe);
  }

  return (
    <CardContainer>
      <FaveBtn recipe={recipe} />
      <StyledCard>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <CardDetails>
          <div>
            <p>Servings</p>
            <h4>{servings}</h4>
          </div>
          <div>
            <p>Duration</p>
            <h4>{readyInMinutes}min</h4>
          </div>
        </CardDetails>
        {/* .replace() is used to remove html tags from the text*/}
        <Description>{summary.replace(/<\/?[^>]+(>|$)/g, "")}</Description>
        <BottomBtns>
          <AddToPlanBtn meal={recipe} />
          <NavLink onClick={clickHandler} to={`/${id}`}>
            Go to recipe ➜
          </NavLink>
        </BottomBtns>
      </StyledCard>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  position: relative;
`;

const StyledCard = styled.li`
  list-style: none;
  margin: 0.75rem auto;
  width: 90%;
  background-color: #f2f2f2;
  border-radius: 8px;
  overflow: hidden;
  padding-bottom: 0.5rem;

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

const BottomBtns = styled.div`
  display: flex;
  justify-content: space-evenly;

  a,
  button {
    all: unset;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 4px;
    padding: 0.25rem;
    font-size: 0.8rem;
    width: 30%;
  }
`;
