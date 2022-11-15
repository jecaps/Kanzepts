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
import Modal from "./Modal";

export default function Details() {
  const { meal, showModal } = useContext(RecipeContext);

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
    <DetailsContainer>
      <GoBack />
      <Image src={image ?? DefaultImage} alt={title} />
      <Title>{title}</Title>

      <BasicDetails>
        <Subdetails>
          <TimeIcon />
          <SubText>{readyInMinutes}min.</SubText>
        </Subdetails>

        <Subdetails>
          <Servings>{servings}</Servings>
          <SubText>Servings</SubText>
        </Subdetails>

        <Subdetails>
          <AddToPlantBtn meal={meal} />
          <SubText>Add To Plan</SubText>
        </Subdetails>

        <Subdetails>
          <FaveBtn recipe={meal} />
          <SubText>Add{isFavorite ? "ed" : ""} To Favorites</SubText>
        </Subdetails>
      </BasicDetails>

      <Summary>{summary.replace(/<\/?[^>]+(>|$)/g, "")}</Summary>

      <div className="details__ingredients">
        <h3>Ingredients</h3>
        <ul>
          {extendedIngredients.map((ingredient) => (
            <Ingredient key={nanoid()} ingredient={ingredient} />
          ))}
        </ul>
      </div>

      {analyzedInstructions.length && (
        <div className="details__instructions">
          <h3>Instructions</h3>
          <ul>
            {analyzedInstructions[0].steps.map((instruction) => (
              <Instruction key={instruction.number} instruction={instruction} />
            ))}
          </ul>
        </div>
      )}

      {showModal && <Modal />}
    </DetailsContainer>
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

  .details__ingredients,
  .details__instructions {
    ul {
      text-align: left;
      padding: 0;
    }
  }

  h2,
  h3,
  p {
    margin: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  margin: auto;
`;

const Title = styled.h2`
  padding: 1rem;
  text-transform: capitalize;
`;

const BasicDetails = styled.div`
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

  svg {
    width: 1rem;
  }
`;

const Subdetails = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 25%;.
`;

const SubText = styled.p`
  display: flex;
  padding: 0.25rem;
  font-size: 0.8rem;
  height: 2rem;
  align-items: center;
`;

const Servings = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const Summary = styled.p`
  text-align: justify;
  padding: 0.75rem 0.5rem;
`;
