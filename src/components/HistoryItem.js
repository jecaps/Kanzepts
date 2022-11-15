import { NavLink } from "react-router-dom";
import { detailsPageNavigator } from "../helpers/Utils";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import styled from "styled-components";
import DefaultImage from "../image/default-placeholder.png";

export default function HistoryItem({ schedule, mealtime }) {
  const { setMeal } = useContext(RecipeContext);

  return (
    <HistoryItemContainer>
      <HistoryListItem>
        <div>
          <img
            src={schedule[mealtime].image ?? DefaultImage}
            alt={schedule[mealtime].title}
          />
          <p>{mealtime} </p>
          <NavLink
            className="history__link"
            to={`/${schedule[mealtime].id}`}
            onClick={() => detailsPageNavigator(setMeal, schedule[mealtime])}
          >
            {schedule[mealtime].title}
          </NavLink>
        </div>
      </HistoryListItem>
    </HistoryItemContainer>
  );
}

const HistoryItemContainer = styled.div`
  position: relative;
  width: 85%;
`;

const HistoryListItem = styled.li`
  overflow: hidden;
  border-radius: 0.5rem;
  position: relative;
  height: 7.5rem;
  padding: 1.8rem 0;

  img {
    position: absolute;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    width: 100%;
    height: 100%;
    padding: 0.25rem;
  }

  p {
    text-transform: capitalize;
    margin: 0;
    font-size: 0.75rem;
  }

  a {
    all: unset;
    font-weight: bold;
  }
`;
