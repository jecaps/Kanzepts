import { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { nanoid } from "nanoid";
import { TimeIcon } from "./Icons";
import DefaultImage from "../image/default-placeholder.png";
import Ingredient from "./Ingredient";
import AddToPlantBtn from "./AddToPlanBtn";
import Instruction from "./Instruction";
import GoBack from "./GoBack";
import FaveBtn from "./FaveBtn";
import Modal from "./Modal";
import styled from "styled-components";

export default function Details() {
  const { meal, showModal } = useContext(RecipeContext);
  const [showMore, setShowMore] = useState(false);
  const [ingredientIsActive, setIngredientIsActive] = useState(true);
  const [instructionIsActive, setInstructionIsActive] = useState(false);

  const {
    image,
    title,
    readyInMinutes,
    extendedIngredients,
    summary,
    analyzedInstructions,
  } = meal;

  const cleanedSummary = summary.replace(/<\/?[^>]+(>|$)/g, "");

  function activeHandler(btn) {
    if (btn === "Ingredients") {
      setIngredientIsActive(true);
      setInstructionIsActive(false);
    } else {
      setIngredientIsActive(false);
      setInstructionIsActive(true);
    }
  }

  return (
    <Container>
      <Image src={image ?? DefaultImage} alt={title} />
      <GoBack />
      <Buttons>
        <AddToPlantBtn meal={meal} />
        <FaveBtn recipe={meal} />
      </Buttons>

      <DetailsContainer>
        <BasicDetails>
          <h2>{title.toLowerCase()}</h2>
          <div>
            <TimeIcon />
            <p>{readyInMinutes}min.</p>
          </div>
        </BasicDetails>

        <Summary>
          <p>
            {showMore
              ? `${cleanedSummary} `
              : `${cleanedSummary.substring(0, 120)} `}
          </p>
          <button onClick={() => setShowMore(!showMore)}>
            Read {showMore ? "Less" : "More"}
          </button>
        </Summary>

        <MainDetails>
          <Option
            ingredientIsActive={ingredientIsActive}
            instructionIsActive={instructionIsActive}
          >
            <button
              className="ingredients"
              onClick={() => activeHandler("Ingredients")}
            >
              Ingredients
            </button>
            <button
              className="instructions"
              onClick={() => activeHandler("Instructions")}
            >
              Instructions
            </button>
          </Option>
          {ingredientIsActive && (
            <ul>
              {extendedIngredients.map((ingredient) => (
                <Ingredient key={nanoid()} ingredient={ingredient} />
              ))}
            </ul>
          )}

          {analyzedInstructions.length !== 0 && instructionIsActive && (
            <ul>
              {analyzedInstructions[0].steps.map((instruction) => (
                <Instruction
                  key={instruction.number}
                  instruction={instruction}
                />
              ))}
            </ul>
          )}
        </MainDetails>
      </DetailsContainer>

      {showModal && <Modal />}
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: #273043;

  .back-btn {
    position: fixed;
    top: 0.5rem;
    left: 0.5rem;
    background-color: rgba(39, 48, 67, 0.7);
    width: 1.25rem;
    height: 1.25rem;
    padding: 0.25rem;
    border-radius: 0.5rem;

    svg {
      width: 1.25rem;
      fill: #f5f7fa;
      stroke: #eee;
    }
  }

  h2,
  h3,
  p {
    margin: 0;
  }
`;

const Image = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: -10;
`;

const Buttons = styled.div`
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  gap: 0.5rem;
  background-color: rgba(39, 48, 67, 0.7);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  fill: #eee;

  svg {
    width: 1.25rem;
  }
`;

const DetailsContainer = styled.div`
  position: fixed;
  top: 13.5rem;
  bottom: 0;
  width: 100vw;
  padding: 0 1.25rem;
  background-color: #fff;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  box-shadow: 0 -4px 20px #777;
  overflow-y: scroll;
`;

const BasicDetails = styled.section`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  align-items: center;
  background-color: #fff;
  fill: #777;
  color: #777;

  h2 {
    text-align: left;
    text-transform: capitalize;
    color: #273043;
  }

  p {
    font-size: 0.8rem;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }

  svg {
    width: 1rem;
  }
`;

const MainDetails = styled.section`
  padding: 0.5rem 0;

  ul {
    text-align: left;
    padding: 0;
  }
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  width: 90%;
  margin: 0.5rem auto;
  padding: 0.2rem;
  border-radius: 0.75rem;

  button {
    all: unset;
    text-align: center;
    border-radius: 0.75rem;
    padding: 0.5rem 0;
    width: 50%;
    font-weight: bold;
  }

  .ingredients {
    ${({ ingredientIsActive }) =>
      ingredientIsActive && "background-color: #273043; color: #fff"};
  }

  .instructions {
    ${({ instructionIsActive }) =>
      instructionIsActive && "background-color: #273043; color: #fff"};
  }
`;

const Summary = styled.div`
  text-align: justify;
  padding: 0;
  color: #777;

  p {
    display: inline;
  }

  button {
    all: unset;
    display: inline;
    color: #273043;
    font-weight: 600;
  }
`;
