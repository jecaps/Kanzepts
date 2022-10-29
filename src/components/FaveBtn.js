import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import styled from "styled-components";

export default function FaveBtn({ recipe }) {
  const { recipes, setRecipes, favorites, setFavorites, results, setResults } =
    useContext(RecipeContext);
  const { id, isFavorite } = recipe;

  function toggleFavorite() {
    setRecipes(
      recipes.map((r) =>
        r.id === id ? { ...r, isFavorite: !r.isFavorite } : r
      )
    );

    setResults(
      results.map((result) =>
        result.id === id
          ? { ...result, isFavorite: !result.isFavorite }
          : result
      )
    );

    // Checks if the recipe is already in the list of favorites
    favorites.every((favorite) => favorite.id !== id) && !isFavorite
      ? setFavorites([
          ...favorites,
          { ...recipe, isFavorite: !recipe.isFavorite },
        ])
      : setFavorites(favorites.filter((favorite) => favorite.id !== id));
  }

  return (
    <Button onClick={() => toggleFavorite()} isFavorite={isFavorite}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z"
        />
      </svg>
    </Button>
  );
}

const Button = styled.button`
  all: unset;
  position: absolute;
  top: -3px;
  right: -8px;
  border-radius: 8px;
  padding: 0.3rem;
  display: flex;
  justify-content: center;

  svg {
    fill: ${({ isFavorite }) => (isFavorite ? "red" : "#000000")};
    width: 40px;
    height: 40px;
  }
`;
