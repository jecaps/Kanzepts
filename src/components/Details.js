import Ingredient from "./Ingredient";
import Instruction from "./Instruction";
import GoBack from "./GoBack";
import AddToPlantBtn from "./AddToPlanBtn";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import styled from "styled-components";
import { nanoid } from "nanoid";
import DefaultImage from "../image/default-placeholder.png";
import { TimeIcon } from "./Icons";
import FaveBtn from "./FaveBtn";

export default function Details() {
  const { meal } = useContext(RecipeContext);

  const {
    image,
    title,
    readyInMinutes,
    servings,
    extendedIngredients,
    summary,
    analyzedInstructions,
    isFavorite,
  } = meal;

  return (
    <>
      <DetailsContainer>
        <GoBack />
        <img className="details__img" src={image ?? DefaultImage} alt={title} />
        <h2 className="details__title">{title}</h2>

        <div className="details__basic">
          <div className="details__subdetails">
            <TimeIcon />
            <p className="details__subtext">{readyInMinutes}min.</p>
          </div>

          <div className="details__subdetails">
            <p className="details__servings">{servings}</p>
            <p className="details__subtext">Servings</p>
          </div>

          <div className="details__subdetails">
            <AddToPlantBtn meal={meal} />
            <p className="details__subtext">Add To Plan</p>
          </div>

          <div className="details__subdetails">
            <FaveBtn recipe={meal} />
            <p className="details__subtext">
              Add{isFavorite ? "ed" : ""} To Favorites
            </p>
          </div>
        </div>

        <p className="details__summary">
          {summary.replace(/<\/?[^>]+(>|$)/g, "")}
        </p>

        <div className="details__ingredients">
          <h3 className="details__subtitle">Ingredients</h3>
          <ul className="details__list">
            {extendedIngredients.map((ingredient) => (
              <Ingredient key={nanoid()} ingredient={ingredient} />
            ))}
          </ul>
        </div>

        <div className="details__instructions">
          <h3 className="details__subtitle">Instructions</h3>
          <ul className="details__list">
            {analyzedInstructions[0].steps.map((instruction) => (
              <Instruction key={instruction.number} instruction={instruction} />
            ))}
          </ul>
        </div>
      </DetailsContainer>
    </>
  );
}

const DetailsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  width: 90%;
  margin: auto;
  font-size: 0.9rem;
  color: #7d1100;

  .back-btn {
    padding: 0.5rem 0.25rem;
    color: #db4200;

    svg {
      width: 1rem;
      fill: #db4200;
    }
  }

  .details__img {
    width: 100%;
    margin: auto;
  }

  .details__title {
    margin: 0;
    padding: 1rem;
    text-transform: capitalize;
  }

  .details__basic {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem;
    background-color: rgba(219, 66, 0, 0.9);
    border-radius: 0.5rem;
    color: #e6e8e6;
    fill: #e6e8e6;
    width: 90%;
    margin: auto;

    .details__subdetails {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 25%;

      .details__subtext {
        display: flex;
        padding: 0.25rem;
        font-size: 0.8rem;
        height: 2rem;
        align-items: center;
      }

      .details__servings {
        font-size: 1rem;
        font-weight: bold;
      }
    }

    svg {
      width: 1rem;
    }
  }

  .details__summary {
    text-align: justify;
    padding: 0.75rem 0.5rem;
  }

  .details__ingredients,
  .details__instructions {
    .details__list {
      text-align: left;
      padding: 0;
    }
  }

  .details__title,
  .details__subtitle {
    color: #db4200;
  }

  p {
    margin: 0;
  }
`;
