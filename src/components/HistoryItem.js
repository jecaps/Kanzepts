import { NavLink } from "react-router-dom";
import { detailsPageNavigator } from "../helpers/Utils";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import styled from "styled-components";
import DefaultImage from "../image/default-placeholder.png";

export default function HistoryItem({ schedule, mealtime }) {
  const { setMeal } = useContext(RecipeContext);

  return (
    <HistoryListItem>
      <NavLink
        className="history__link"
        to={`/${schedule[mealtime].id}`}
        onClick={() => detailsPageNavigator(setMeal, schedule[mealtime])}
      >
        <img
          src={schedule[mealtime].image ?? DefaultImage}
          alt={schedule[mealtime].title}
        />
        <div>
          <p className="slot">{mealtime} </p>
          <p className="recipe">{schedule[mealtime].title}</p>
        </div>
      </NavLink>
    </HistoryListItem>
  );
}

const HistoryListItem = styled.li`
  background-color: #fff;
  width: 85%;
  border-radius: 0.75rem;

  a {
    all: unset;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  img {
    padding: 0.25rem;
    width: 6rem;
    height: 6rem;
    object-fit: cover;
    border-radius: 0.75rem;
  }

  p {
    margin: 0;
  }

  .recipe {
    font-weight: 600;
    padding: 0 0.25rem;
  }

  .slot {
    font-size: 0.8rem;
  }

  div {
    width: 80%;
  }
`;
