import { NavLink } from "react-router-dom";
import FaveBtn from "./FaveBtn";
import styled from "styled-components";
import AddToPlanBtn from "./AddToPlanBtn";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import DefaultImage from "../image/default-placeholder.png";
import { detailsPageNavigator } from "../helpers/Utils";
import { TimeIcon } from "./Icons";

export default function Card({ recipe }) {
  const { setMeal } = useContext(RecipeContext);
  const { id, image, title, readyInMinutes, summary } = recipe;

  return (
    <CardContainer>
      <div className="card__buttons">
        <FaveBtn recipe={recipe} />
        <AddToPlanBtn meal={recipe} />
      </div>

      <li className="card">
        <NavLink
          className="card__link"
          onClick={() => detailsPageNavigator(setMeal, recipe)}
          to={`/${id}`}
        >
          <img
            className="card__image"
            src={image ?? DefaultImage}
            alt={title}
          />

          <p className="card__title">{title}</p>

          <div className="card__duration">
            <TimeIcon />
            <p>{readyInMinutes}min</p>
          </div>

          {/* .replace() is used to remove html tags from the text*/}
          <p className="card__description">
            {summary.replace(/<\/?[^>]+(>|$)/g, "")}
          </p>
        </NavLink>
      </li>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  position: relative;

  .card__buttons {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    position: absolute;
    top: 0.25rem;
    right: 1.5rem;
    background-color: rgba(0 0 0 / 0.6);
    border-radius: 0.5rem;
    padding: 0.25rem;

    .add-btn {
      svg {
        fill: #e6e8e6;
        width: 1.25rem;
      }
    }
  }

  .card {
    list-style: none;
    margin: 1rem auto;
    width: 90%;
    background-color: #fffcdd;
    box-shadow: 1px 2px 4px #ddd;
    border-radius: 0.75rem;
    overflow: hidden;
    padding-bottom: 0.5rem;
    color: #bb4d00;

    .card__link {
      all: unset;
    }

    .card__image {
      width: 100%;
      height: 12rem;
      object-fit: cover;
    }

    .card__duration {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.15rem;
      padding: 0.25rem;

      p {
        margin: 0;
        font-size: 0.75rem;
      }

      svg {
        width: 1rem;
        fill: #bb4d00;
      }
    }

    .card__title {
      margin: 0;
      padding: 0.25rem;
      font-size: 1.25rem;
      font-weight: 900;
      color: #8f250c;
    }

    .card__description {
      text-align: justify;
      margin: 0.75rem 0;
      padding: 0 1rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      font-size: 0.9rem;
      overflow: hidden;
    }
  }
`;
