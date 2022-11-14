import { NavLink } from "react-router-dom";
import FaveBtn from "./FaveBtn";
import styled from "styled-components";
import AddToPlanBtn from "./AddToPlanBtn";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import DefaultImage from "../image/default-placeholder.png";
import { detailsPageNavigator } from "../helpers/Utils";
import { TimeIcon, HeartIcon } from "./Icons";

export default function Card({ recipe }) {
  const { setMeal } = useContext(RecipeContext);
  const {
    id,
    image,
    title,
    readyInMinutes,
    vegan,
    vegetarian,
    glutenFree,
    dairyFree,
    veryHealthy,
    cheap,
    sustainable,
    veryPopular,
    diets,
    dishTypes,
    cuisines,
    aggregateLikes,
    summary,
  } = recipe;

  return (
    <CardContainer>
      <Buttons>
        <FaveBtn recipe={recipe} />
        <AddToPlanBtn meal={recipe} />
      </Buttons>

      <StyledCard>
        <NavLink
          onClick={() => detailsPageNavigator(setMeal, recipe)}
          to={`/${id}`}
        >
          <img src={image ?? DefaultImage} alt={title} />

          <CardHeader>
            <Category>
              {vegan
                ? "vegan"
                : vegetarian
                ? "vegetarian"
                : veryHealthy
                ? "healthy"
                : glutenFree
                ? "gluten-free"
                : dairyFree
                ? "non dairy"
                : cheap
                ? "cheap"
                : sustainable
                ? "sustainable"
                : veryPopular
                ? "popular"
                : diets.length
                ? diets[Math.floor(Math.random() * diets.length)]
                : dishTypes.length
                ? dishTypes[Math.floor(Math.random() * dishTypes.length)]
                : cuisines.length
                ? cuisines[0]
                : "enjoyable"}
            </Category>

            <DurationAndLikes>
              <div>
                <TimeIcon />
                <p>{readyInMinutes}min</p>
              </div>

              <div>
                <HeartIcon />
                <p>{aggregateLikes}</p>
              </div>
            </DurationAndLikes>
          </CardHeader>

          <Title>{title}</Title>

          {/* .replace() is used to remove html tags from the text*/}
          <Description>{summary.replace(/<\/?[^>]+(>|$)/g, "")}</Description>
        </NavLink>
      </StyledCard>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  position: relative;
  text-align: left;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  position: absolute;
  top: 0.35rem;
  right: 2.25rem;
  background-color: rgba(0 0 0 / 0.6);
  border-radius: 0.75rem;
  padding: 0.25rem;

  .add-btn {
    svg {
      fill: #e6e8e6;
      width: 1.25rem;
    }
  }
`;

const StyledCard = styled.div`
  list-style: none;
  margin: 1rem auto;
  width: 85%;
  background-color: #fff;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 1.5rem;
  overflow: hidden;
  padding-bottom: 0.5rem;
  color: #273043;

  a {
    all: unset;
  }

  img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.75rem 0 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

const Category = styled.li`
  background-color: #30cfd0;
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 1.5rem;
  margin: 0;
  font-size: 0.8rem;
`;

const DurationAndLikes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem;
  fill: #bbb;
  color: #bbb;

  div {
    gap: 0.5rem;
  }

  p {
    margin: 0;
    font-size: 0.75rem;
  }

  svg {
    width: 1rem;
  }
`;

const Title = styled.h3`
  margin: 0;
  padding: 0.75rem 1rem 0 1rem;
  font-family: "dosis", sans-serif;
`;

const Description = styled.p`
  text-align: left;
  line-height: 100%;
  margin: 0;
  padding: 0.125rem 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.9rem;
  overflow: hidden;
  color: #555;
`;
