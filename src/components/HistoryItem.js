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
      <HistoryListItem image={schedule[mealtime].image}>
        <div className="history__info">
          <img
            className="history__bg"
            src={schedule[mealtime].image ?? DefaultImage}
            alt={schedule[mealtime].title}
          />
          <p className="history__mealtime">{mealtime} </p>
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
  box-shadow: 2px 2px 4px #898989;
  position: relative;
  height: 7.5rem;
  padding: 1.8rem 0;

  .history__bg {
    position: absolute;
    width: 100%;
    object-fit: cover;
    filter: blur(1px);
    z-index: -1;
  }

  .history__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(254, 254, 227, 0.7);
    color: #d63230;
    width: 100%;
    height: 100%;
    padding: 0.25rem;
  }

  .history__mealtime {
    text-transform: capitalize;
    margin: 0;
    font-size: 0.75rem;
  }

  .history__link {
    all: unset;
    font-weight: bold;
  }
`;
